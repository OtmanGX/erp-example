import { Sales_Product_Type_Enum } from "@tanglass-erp/infrastructure/graphql";
import { Interface } from "readline";

export interface Product_draft {
    id: string;
    draft_id?: number;
    product_code?: string;
    label?: string;
    count?: number;
    width?: number;
    heigth?: number;
    quantity?: number;
    price?: number;
    total_price?: number;
    delivered?: number;
    company_name?: string;
    company_id?: string;
    m2?: number;
    ml?: number;
    warehouse_id?: string;
    type?: string;
    substance_id?: string;
    unit?:string;
    glass_draft?:{
        id:string
    };
    dependent_id?: string;
    isRepeated? :boolean;
}
export interface InsertedProduct extends Product_draft {
type:Sales_Product_Type_Enum
}
