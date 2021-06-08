import { SalesCustomer,SalesCompany } from "./quotation";
export interface Order {
    id: number;
    draft_id: number;
    customer: SalesCustomer
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company: SalesCompany;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
    delivery_status:string;
    payment_status:string;
}



export interface OrdersSum{
  
        total_ht:number;
        total_tax:number;
        total_ttc:number
    
}
