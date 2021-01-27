import { MetaData } from "libs/core/shared/metaData";
import { SalePoint } from "@tanglass-erp/core/management";
import { PartialData } from "./shared.models";

export interface Warehouse{
    id:string;
    name:string;
    company:PartialData;
    salesPoint?:PartialData;
}




export interface InsertedWarehouse {
    companyid:string;
    name:string;
    salePointid:string;
}

