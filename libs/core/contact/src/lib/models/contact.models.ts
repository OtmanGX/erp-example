import { MetaData } from "libs/core/shared/metaData";
import { Address } from "./address.model";
export interface Contact{
    id?:string;
    code?:string;
    mail?:string;
    name?:string;
    note?:string;
    phone?:string;
}

export interface DetailedContact extends MetaData{
    id?:string;
    code?:string;
    mail?:string;
    name:string;
    note?:string;
    phone:string;
    addresses?:Address[];
    customers?:Contact[];
    provider?:Contact[];
}

