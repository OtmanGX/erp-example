export interface PurchaseDelivery{
    id?:number;
    date:Date;
    ref?:string;
    provider_id:string;
    items?:PurchaseItem[];
}

export interface PurchaseItem{
    substance_id:string;
    quantity:number;
    warehouse_id:string;
    code:string;
    label:string;
    cost:number;
}

export interface InsertedPurchaseDelivery{
    date:Date;
    provider_id:string;
    items:PurchaseItem[];
}