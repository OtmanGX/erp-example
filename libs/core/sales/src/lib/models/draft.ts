import { Sales_Product_Type_Enum } from "@tanglass-erp/infrastructure/graphql";

export interface Draft{
    id:number;
    status?:string;
    customer_id?:string;
    contact_id?:string;
    date?:Date;
    company_id?:string;

}

