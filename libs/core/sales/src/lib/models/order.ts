import { SalesCustomer,SalesCompany } from "./quotation";
export interface Order {
    id: number;
    draft_id: number;
    status?: string;
    customer: SalesCustomer
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company: SalesCompany;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
}



export interface OrdersSum{
  
        total_ht:number;
        total_tax:number;
        total_ttc:number
    
}
