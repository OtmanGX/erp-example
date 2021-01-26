import { Glass } from "@tanglass-erp/core/product";
import { Warehouse } from "./warehouse.model";

export interface GlassWarehouse{
    substance: { glass?: Glass };
    warehouse: Warehouse;
    quantity: number;
}