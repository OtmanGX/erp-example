import { Sales_Product_Type_Enum } from "@tanglass-erp/infrastructure/graphql";
import { SalesCompany, SalesCustomer } from './quotation';
import { Product_draft } from './product';

export interface Draft {
    id:number;
    status?:string;
    customer_id?:string;
    contact_id?:string;
    date?:Date;
    company_id?:string;
}


export interface DraftDetailed {
    id: number;
    status?: string;
    customer?: SalesCustomer;
    contact_id?: string;
    date?: Date;
    company?: SalesCompany;
    product_drafts?: Product_draft[];
}


