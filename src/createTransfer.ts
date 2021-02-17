const stringifyObject = require("stringify-object");
const axios = require('axios'); 

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
// execute the  operation in Hasura

const execute = async (variables,operation) => { 
  const fetchResponse = await axios.post(
    "https://tanglass.hasura.app/v1/graphql",
    {
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        query: operation,
        variables,
      }
    }
  );
  const data = await fetchResponse.json();
  return data;
};
  
//  Handler
 export const handler =async (req: any, res) => {
  const body = JSON.parse(req.body);

  // get  input
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
      body: stringifyObject({  message:errors[0]})
  };
  }

  // success  
  return {
    statusCode: 200,
    body: stringifyObject({ ...data.insert_stock_item_tranfer_one})
};

};


