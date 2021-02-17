const stringifyObject = require("stringify-object");
import axios from 'axios';
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
  const fetchResponse = axios.post(
    "https://tanglass.hasura.app/v1/graphql",
    {
        query: operation,
        variables,
    }
  ).then((data)=>{
    return data.data
  })
  .catch(err=>{
    return err
  });
  console.log(fetchResponse)
  return fetchResponse;
};
  
//  Handler
 export const handler =async (req: any, res) => {
  const body = JSON.parse(req.body);

  // get  input
  const { date, order_itemid, quantity, status ,substanceid, warehouseid} = body.input;

  // run some business logic
//fetch current stock availability data 
const  stock_response  = await execute({ substanceid, warehouseid },STOCK_QUERY);

const  stock_warehouse_substance_by_pk = stock_response.stock_warehouse_substance_by_pk;
console.log('stock',stock_response)
if(!stock_warehouse_substance_by_pk) {
  return res.status(400).json({
    message: "error 400 "
  })
}

const quantity_inStock = stock_warehouse_substance_by_pk ? stock_warehouse_substance_by_pk.quantity : 0;
const newstock =quantity_inStock-quantity

if(quantity_inStock <= 0) {
  return res.status(400).json({
    message: "stock épuisé "
  })
}

  // execute the Hasura operation
  const  data  = await execute({ date, order_itemid, quantity, status,substanceid,warehouseid,newstock},HASURA_OPERATION);
  if (!data.insert_stock_item_tranfer_one) {
    return res.status(400).json({
      message: "error 400 "
    })
  }

  // success  
  return res.json({
    ...data.insert_stock_item_tranfer_one
  })
};


