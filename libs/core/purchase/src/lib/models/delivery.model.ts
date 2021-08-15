export interface PurchaseDelivery{
    id:number;
    date:Date;
    ref?:string;
    items?:PurchaseItem[];

}


export interface PurchaseItem{
    substance_id:string;
    quantity:number;
    warehouse_id:string;
    code;string;
    label:string;
}

export interface InsertedPurchaseDelivery{
    id:number;
    date:Date;
    ref:string;
    items:PurchaseItem[];
}