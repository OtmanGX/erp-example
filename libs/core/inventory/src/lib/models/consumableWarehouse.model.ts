import { Consumable } from "@tanglass-erp/core/product";
import { Warehouse } from "./warehouse.model";

export interface ConsumableWarehouse{
consumable:Consumable;
warehouse:Warehouse;
quantity:number;
}