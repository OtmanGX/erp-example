const stringifyObject = require("stringify-object");
import { fetch } from "node-fetch";
// new 

const HASURA_OPERATION = `

mutation InsertItemTranfser($date: date, $order_itemid: uuid, $quantity: Float, $status: String, $substanceid: uuid!,$warehouseid: uuid!, $newstock: Float) {
    insert_stock_item_tranfer_one(object: {date: $date, order_itemid: $order_itemid, quantity: $quantity, status: $status}) {
      id
      date
      quantity
      status
    }
    warehouse_status_update:update_stock_warehouse_substance_by_pk(pk_columns: {substanceid: $substanceid, warehouseid: $warehouseid}, _set: {quantity: $newstock}) {
      quantity
    }
  }
  
  
`;

const STOCK_QUERY=`
query ($substanceid: uuid!, $warehouseid: uuid!) {
    stock_warehouse_substance_by_pk(substanceid: $substanceid, warehouseid: $warehouseid) {
      quantity
    }
  }
  
`
// execute the parent operation in Hasura

const execute = async (variables,operation) => {
  const fetchResponse = await fetch(
    "https://tanglass.hasura.app/v1/graphql",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: stringifyObject({
        query: operation,
        variables
      })
    }
  );
  const data = await fetchResponse.json();
  console.log('DEBUG: ', data);
  return data;
};
  
// Request Handler
 export const handler =async (req: any, res) => {
  const body = JSON.parse(req.body);

  // get request input
  const { date, order_itemid, quantity, status ,substanceid, warehouseid} = body.input;

  // run some business logic
//fetch current stock availability data 
const { data: stock_response, errors: stock_errors } = await execute({ substanceid, warehouseid },
      STOCK_QUERY);

const  stock_warehouse_substance_by_pk = stock_response.stock_warehouse_substance_by_pk;
if(!stock_warehouse_substance_by_pk) {
  return {
    statusCode: 400,
    body: JSON.stringify({  message: "error 400 "})
};
}

const quantity_inStock = stock_warehouse_substance_by_pk ? stock_warehouse_substance_by_pk.quantity : 0;
const newstock =quantity_inStock-quantity

if(quantity_inStock <= 0) {
  return {
    statusCode: 400,
    body: JSON.stringify({  message:"Stock Epuisé"})
};
}

  // execute the Hasura operation
  const { data, errors } = await execute({ date, order_itemid, quantity, status,substanceid,warehouseid,newstock},HASURA_OPERATION);

  // if Hasura operation errors, then throw error
  if (errors) {
    return {
      statusCode: 400,
      body: JSON.stringify({  message:errors[0]})
  };
  }

  // success  
  return {
    statusCode: 200,
    body: JSON.stringify({ ...data.insert_stock_item_tranfer_one})
};

};


