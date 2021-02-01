import { Accessory } from "@tanglass-erp/core/product";
import { Warehouse } from "../models/warehouse.model";



//list of warehouses 
export interface WarehousesVM {
    Warehouses:Warehouse[];
    loading:boolean;
    error?: string;
}

