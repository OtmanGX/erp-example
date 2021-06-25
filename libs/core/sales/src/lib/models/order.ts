import { SalesCustomer, SalesCompany } from "./quotation";
import { Product_draft } from "./product";

export interface Order {
    id: number;
    draft_id: number;
    customer: SalesCustomer
    contact_id?: string;
    delivery_status: string;
    payment_status: string;
    date?: Date;
    deadline?: Date;
    company: SalesCompany;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
    products?:Product_draft[]

}

export interface insertOrder{
    id: number;
    draft_id: number;
    customer_id: string;
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company_id: string;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
}


export interface OrdersSum{
        total_ht:number;
        total_tax:number;
        total_ttc:number
}
