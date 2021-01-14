import { Glass } from "@tanglass-erp/core/product";
import { Warehouse } from "./warehouse.model";

export interface glassWarehouse{
    id:string;
    code:string;
    glass:Glass;
    Warehouse:Warehouse;
}