import { MetaData } from "libs/core/shared/metaData";
import { Address,PartialContact } from "./shared.models";


// used for  providers grid table display

export interface Provider{
    id:string;
    name:string;
    note?:string;
    code?:string;
    phone:string;
    mail?:string;

}
// used for get by id (provider card ) and editing option  
export interface DetailedProvider extends MetaData{
    id:string;
    name:string;
    note?:string;
    phone:string;
    code?:string;
    mail?:string;
    FAX?:string;
    website?:string;
    addresses?:Address[];
    contacts?:PartialContact[];
    
}

// used for inserting new provider

export interface InsertedProvider {
    name:string;
    note?:string;
    phone:string;
    mail?:string;
    code?:string;
    FAX?:string;
    website?:string;
    addresses?:Address[];
    contacts?:PartialContact[];
}