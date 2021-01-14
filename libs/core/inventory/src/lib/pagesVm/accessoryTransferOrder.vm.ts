import { Accessory } from "@tanglass-erp/core/product";
import { AccessoryTransferOrder, DetailedAccessoryTransferOrder } from "../models/accessoryTransrefOrder.model";
import { Warehouse } from "../models/warehouse.model";



//list of transfers 
export interface AccessoryTransferOrderVM {
    accessoryTransfers:AccessoryTransferOrder[];
    loading:boolean;
    error?: string;
}


//accessory transfer  fiche 
export interface DetailedAccessoryTransferOrderVM{
    detailedAccessoryTransfer:DetailedAccessoryTransferOrder;
    loading:boolean;
    error?:string;
}

//accessory transfer creation
export interface creationAccessoryTransferOrderVM{
    warehouses:Warehouse[];
    accesories:Accessory[];
    loading:boolean;
    error?:string;
}