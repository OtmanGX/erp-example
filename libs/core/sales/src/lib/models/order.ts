import { SalesCustomer, SalesCompany } from "./quotation";
<<<<<<< HEAD
import { Product_draft } from "./product";
import { ShortFeauture } from '@tanglass-erp/core/common';

=======
import { ShortFeauture } from '@tanglass-erp/core/common';
>>>>>>> 2d0cfc5ef4f46402b987a2a151311c772ac50f0e
export interface Order {
    id: number;
    draft_id: number;
    ref?: string;
    customer: SalesCustomer
    contact_id?: string;
    delivery_status: string;
    payment_status: string;
    date?: Date;
    deadline?: Date;
    company: SalesCompany;
    salepoint?: ShortFeauture;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
    products?:Product_draft[]

}

export interface insertOrder {
    id: number;
    draft_id: number;
    customer_id: string;
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company_id: string;
    salepoint_id?: string;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
}


export interface OrdersSum {
        total_ht:number;
        total_tax:number;
        total_ttc:number
}
