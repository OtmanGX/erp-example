import { Sales_Product_Type_Enum } from "@tanglass-erp/infrastructure/graphql";
import { Product_draft } from "./product";
import { SalesCustomer,SalesCompany } from "./quotation";
export interface Draft{
    id:number;
    status?:string;
    customer_id?:string;
    contact_id?:string;
    date?:Date;
    company_id?:string;
    products?:Product_draft[]
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


