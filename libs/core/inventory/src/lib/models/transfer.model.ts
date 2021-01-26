import { MetaData } from "libs/core/shared/metaData";
import { TransferOrder } from "./transrefOrder.model";

//for the transfers grid

export interface Transfer{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;
}


//for getting a transfer details 
export interface  DetailedTransfer extends MetaData{
    id:string;
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;

}


//for inserting  a transfer  

export interface  InsertedTransfer {
    quatity:number;
    transferDate:Date;

    status:string; // confirmed/ delivered /closed/suspended transferStatus
    tansferOrder:TransferOrder;

}