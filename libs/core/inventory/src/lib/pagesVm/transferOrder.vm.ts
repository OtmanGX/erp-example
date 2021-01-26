import { Accessory, Glass } from "@tanglass-erp/core/product";
import { Substance } from "libs/core/product/src/lib/models/shared.model";
import {TransferOrder, DetailedTransferOrder } from "../models/transrefOrder.model";
import { Warehouse } from "../models/warehouse.model";



//list of transfers orders
export interface TransferOrderVM {
    transfers:TransferOrder[];
    loading:boolean;
    error?: string;
}


// transfer order  fiche 
export interface DetailedTransferOrderVM{
    detailedTransfer:DetailedTransferOrder;
    loading:boolean;
    error?:string;
}

// transfer order creation
export interface creationTransferOrderVM{
    warehouses:Warehouse[];
    glasses:Glass[];
    accessories:Accessory[];
    loading:boolean;
    error?:string;
}