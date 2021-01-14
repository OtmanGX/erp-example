import { MetaData } from "@tanglass-erp/core/shared";
import { Accessory } from "@tanglass-erp/core/product";
import {Warehouse  } from "./warehouse.model";
import { AccessoryTransfer } from "./accessoryTransfer.model";

export interface AccessoryTransferOrder{
    id:string;
    accessory:Accessory;
    fromWarehouse:string;
    toWarehouse:string;
    quantity:number;
    status:string;
    accessoryTransfer:AccessoryTransfer[];

}

export interface DetailedAccessoryTransferOrder extends MetaData{
    id:string;
    accessory:Accessory;
    fromWarehouse:Warehouse;
    toWarehouse:Warehouse;
    quantity:number;
    orderDate:Date;
    deadlineDate:Date;
    status:string; // confirmed/ delivered /closed/suspended enum transferStatus
    accessoryTransfer:AccessoryTransfer[];

}


export interface InsertedAccessoryTransferOrder {
    accessory:Accessory;
    fromWarehouse:Warehouse;
    toWarehouse:Warehouse;
    quantity:number;
    orderDate:Date;
    deadlineDate:Date;
    status:string; // confirmed/ delivered /closed/suspended transferStatus

}