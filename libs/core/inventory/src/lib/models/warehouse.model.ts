import { MetaData } from "libs/core/shared/metaData";
import { SalePoint } from "@tanglass-erp/core/management";
import { PartialData } from "./shared.models";

export interface Warehouse{
    id:string;
    name:string;
    type?:string; //usine or salePoint
    company:PartialData;
    salesPoint?:PartialData;
    
}


export interface DetailedWarehouse extends MetaData{
    id:string;
    type?:string; 
    company:PartialData;
    salePoint:PartialData;
}


export interface InsertedWarehouse {
    type:string; 
    companyid:string;
    salePointid:string;
}

