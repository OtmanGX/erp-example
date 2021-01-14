import { MetaData } from "libs/core/shared/metaData";
import { AccessoryTransferOrder } from "./accessoryTransrefOrder.model";

export interface AccessoryTransfer{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:AccessoryTransferOrder;
}

export interface  DetailedAccessoryTransfer extends MetaData{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:AccessoryTransferOrder;

}

export interface  InsertedAccessoryTransfer {
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:AccessoryTransferOrder;

}