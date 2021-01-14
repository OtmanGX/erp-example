import { Accessory } from "@tanglass-erp/core/product";
import { Warehouse } from "./warehouse.model";

export interface AccessoryWarehouse{
accessory:Accessory;
warehouse:Warehouse;
quantity:number;
}