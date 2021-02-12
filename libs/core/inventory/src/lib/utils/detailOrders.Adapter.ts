import { flattenObj } from "@tanglass-erp/core/common";
import { GetAccessoryWarehousesByIdQuery } from "@tanglass-erp/infrastructure/graphql";
import { SubstanceStocksDetails } from "../models/shared.models";
export function AdaptOrderedItems(obj) {

  return Object.assign({}, {
    fromwarehouse: obj.transfer_order.fromwarehouse.name,
    towarehouse: obj.transfer_order.towarehouse.name,
    id: obj.id,
    date: obj.transfer_order.date,
    deadline: obj.transfer_order.deadline,
    item: flattenObj(obj.substance),
    quantity: obj.quantity,
    status: obj.status
  })
}


export function AdaptSubstanceStockDetails(obj: GetAccessoryWarehousesByIdQuery):SubstanceStocksDetails {

  return {
    sum_quantity: obj.stock_warehouse_substance_aggregate.aggregate.sum.quantity,
    max_quantity: obj.stock_warehouse_substance_aggregate.aggregate.max.quantity,
    min_quantity: obj.stock_warehouse_substance_aggregate.aggregate.min.quantity,
    count: obj.stock_warehouse_substance_aggregate.aggregate.count,
    code: obj.stock_warehouse_substance_aggregate.nodes[0].substance.productAccessory.code,
    label: obj.stock_warehouse_substance_aggregate.nodes[0].substance.productAccessory.label,
    price: obj.stock_warehouse_substance_aggregate.nodes[0].substance.productAccessory.price,
    unit: obj.stock_warehouse_substance_aggregate.nodes[0].substance.productAccessory.unit,

    stocks: obj.stock_warehouse_substance_aggregate.nodes.map(o =>
      Object.assign({}, { quantity: o.quantity, name: o.warehouse.name, quantity_min: o.quantity_min }))
  }
}


