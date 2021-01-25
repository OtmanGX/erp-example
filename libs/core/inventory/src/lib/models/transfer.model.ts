import { MetaData } from "libs/core/shared/metaData";
import { TransferOrder } from "./transrefOrder.model";

export interface Transfer{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;
}

export interface  DetailedTransfer extends MetaData{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;

}

export interface  InsertedTransfer {
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;

}