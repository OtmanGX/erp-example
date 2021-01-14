import { Accessory } from "@tanglass-erp/core/product";
import { AccessoryTransfer, DetailedAccessoryTransfer } from "../models/accessoryTransfer.model";
import { Warehouse } from "../models/warehouse.model";



//list of transfers 
export interface AccessoryTransferVM {
    accessoryTransfers:AccessoryTransfer[];
    loading:boolean;
    error?: string;
}


//accessory transfer  fiche 
export interface DetailedAccessoryTransferVM{
    detailedAccessoryTransfer:DetailedAccessoryTransfer;
    loading:boolean;
    error?:string;
}

