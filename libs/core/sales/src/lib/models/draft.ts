

export interface Draft{
    id:number;
    status:string;
    customer_id:string;
    contact_id:string;
    date:Date;
    company_id:string;

}
export interface Glass_draft{
    id:string;
    draft_id:number;
    glass_code:string;
    glass_label:string;
    count:number;
    width:number;
    heigth:number;
    quantity:number;
    price:number;
    total_price:number;
    company_name :string;

}
export interface Service_draft{
    id:string;
    glass_draft_id:string;
    service_code:string;
    service_label:string;
    quantity:number;
    price:number;
    total_price:number;
    company_name :string;
}
export interface Consumable_draft{
    id:string;
    draft_id?:number;
    glass_draft_id?:string;
    consumable_code:string;
    consumable_label:string;
    quantity:number;
    price:number;
    total_price:number;
    company_name :string;

}
export interface Accessory_draft{
    id:string;
    draft_id:number;
    accessory_code:string;
    accessory_label:string;
    quantity:number;
    price:number;
    total_price:number;
    company_name :string;

}