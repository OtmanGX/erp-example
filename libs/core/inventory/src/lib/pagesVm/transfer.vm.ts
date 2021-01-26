import { Accessory } from "@tanglass-erp/core/product";
import { Transfer, DetailedTransfer } from "../models/transfer.model";
import { Warehouse } from "../models/warehouse.model";



//list of transfers 
export interface TransferVM {
    transfers:Transfer[];
    loading:boolean;
    error?: string;
}




