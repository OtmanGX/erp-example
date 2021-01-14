import { MetaData } from "libs/core/shared/metaData";
import { SalePoint } from "@tanglass-erp/core/management";


export interface Warehouse{
    id:string;
    type:string; //usine or salePoint
    company:string;
    salePoint:string;
    
}


export interface DetailedWarehouse extends MetaData{
    id:string;
    type:string; 
    company:string;
    salePoint:SalePoint;
}


export interface InsertedWarehouse {
    type:string; 
    company:string;
    salePoint:SalePoint;
}