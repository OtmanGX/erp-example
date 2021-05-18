

export interface Draft{
    id:number;
    status?:string;
    customer_id?:string;
    contact_id?:string;
    date?:Date;
    company_id?:string;

}

export interface Product_draft{
    id:string;
    draft_id?:number;
    product_code?:string;
    label?:string;
    count?:number;
    width?:number;
    heigth?:number;
    quantity?:number;
    price?:number;
    total_price?:number;
    company_name ?:string;
    company_id?:string;
    m2?:number;
    ml?:number;
    glass_draft_id?:string;
    warehouse_id?:string;
}

