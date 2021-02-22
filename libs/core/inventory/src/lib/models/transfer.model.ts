import { MetaData } from '@tanglass-erp/core/common';
import { TransferOrder } from "./transrefOrder.model";

//for the transfer ordered item data

export interface OrderItem {
    id?:string;
    quantity:number;
    status?:string;//pending or delivered
    substance:ItemTransfer;
    total_deliveries:number;
    deliveries:Transfered[]
}
//for the quantity of  items  that are transfered

export interface Transfered{
    id:string;
    date:Date;
    quantity:number;
    status?:string// ready or out
}
//for the type and data  of  substances  to transfer

export interface ItemTransfer{
    productGlass?: ProductTransfer
    productAccessory?:ProductTransfer
}



export interface ProductTransfer{
        code?:string;
        label?:string;
}
