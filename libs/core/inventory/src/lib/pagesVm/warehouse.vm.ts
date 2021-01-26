import { Accessory } from "@tanglass-erp/core/product";
import { Transfer, DetailedTransfer } from "../models/transfer.model";
import { Warehouse,DetailedWarehouse } from "../models/warehouse.model";



//list of warehouses 
export interface WarehousesVM {
    Warehouses:Warehouse[];
    loading:boolean;
    error?: string;
}


// warehouse  fiche 
export interface DetailedWarehouseVM{
    detailedWarehouse:DetailedWarehouse;
    loading:boolean;
    error?:string;
}