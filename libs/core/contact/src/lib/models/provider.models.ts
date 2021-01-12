import { MetaData } from "libs/core/shared/metaData";
import { Address } from "./address.model";
import { Contact } from "./contact.models";

export interface Provider{
    id:string;
    name:string;
    note?:string;
    phone:string;
    mail?:string;

}

export interface DetailedProvider extends MetaData{
    id:string;
    code?:string;
    name:string;
    note?:string;
    phone:string;
    mail?:string;
    FAX?:string;
    website?:string;
    addresses?:Address[];
    contacts?:Contact[];
    
}