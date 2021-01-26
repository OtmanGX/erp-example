import { MetaData } from "libs/core/shared/metaData";
import { TransferOrder } from "./transrefOrder.model";

//for the transfer ordered item data 

export interface OrderItem {
    id:string;
    quantity:number;
    status:string;//pending or delivered
    substance:ItemTransfer;
    item_tranfers:Transfered[]
}
//for the quantity of  items  that are transfered

export interface Transfered{
    quantity:number;
    id:string;
    status:string// ready or out
}
//for the type and data  of  substances  to transfer

export interface ItemTransfer{
  glass?:ProductTransfer
  accessory?:ProductTransfer
}



export interface ProductTransfer{
    product:{
        code:string;
        label:string;
    }
}
