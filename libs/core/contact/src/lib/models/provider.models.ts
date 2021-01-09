import { MetaData } from "libs/core/shared/metaData";
import { Address } from "./address.model";
import { PartialContact } from "./shared.models";

export interface Provider{
    id:string;
    name:string;
    note:string;
    phone:string;
    mail:string;

}

export interface DetailedProvider extends MetaData{
    id:string;
    code:string;
    name:string;
    note:string;
    phone:string;
    mail:string;
    addresses:Address[];
    contacts:PartialContact[];
    
}