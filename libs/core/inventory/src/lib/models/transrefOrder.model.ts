import { MetaData } from '@tanglass-erp/core/common';
import { Warehouse  } from "./warehouse.model";
import { OrderItem } from "./transfer.model";
import { Substance } from "libs/core/product/src/lib/models/shared.model";
import { PartialData } from "./shared.models";

export interface TransferOrder {
    id: number;
    fromwarehouse: PartialData;
    towarehouse: PartialData;
    date: Date;
    deadline: Date;
    status: string;
}

export interface DetailedTransferOrder extends MetaData {
    id: number;
    tranfer_order_items: OrderItem[];
    fromwarehouse: PartialData;
    towarehouse: PartialData;
    date: Date;
    deadline: Date;
    status: string; // confirmed/ delivered /closed/suspended enum transferStatus
}


export interface InsertedTransferOrder {
    date: Date, 
    deadline: Date,
    fromWarehouseid: string,
    toWarehouseid: string,
    orderItems: Item[],
    status:string

}
export interface Item {
    substanceid: string,
    quantity: number,
}