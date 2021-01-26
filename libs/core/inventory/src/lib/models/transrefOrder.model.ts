import { MetaData } from "@tanglass-erp/core/shared";
import { Accessory } from "@tanglass-erp/core/product";
import {PartialData, Warehouse  } from "./warehouse.model";
import { Transfer } from "./transfer.model";
import { Substance } from "libs/core/product/src/lib/models/shared.model";

export interface TransferOrder{
    id:number;
    fromwarehouse:PartialData;
    towarehouse:PartialData;
    date:Date;
    deadline:Date;
    status:string;
}

export interface DetailedTransferOrder extends MetaData{
    id:number;
    subsctance:Substance;
    fromWarehouse:Warehouse;
    toWarehouse:Warehouse;
    quantity:number;
    date:Date;
    deadline:Date;
    status:string; // confirmed/ delivered /closed/suspended enum transferStatus
    Transfer:Transfer[];

}



export interface InsertedTransferOrder {
    substance:Substance;
    fromWarehouseid:string;
    toWarehouseid:string;
    quantity:number;
    orderDate:Date;
    deadlineDate:Date;
    status:string; // confirmed/ delivered /closed/suspended transferStatus

}
