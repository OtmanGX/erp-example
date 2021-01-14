import { MetaData } from "libs/core/shared/metaData";
import { Address,PartialContact } from "./shared.models";




export interface Contact{
    id:string;
    mail?:string;
    code?:string;
    name:string;
    note?:string;
    phone:string;
}

export interface DetailedContact extends MetaData{
    id:string;
    mail?:string;
    code?:string;
    name:string;
    note?:string;
    phone:string;
    addresses?:Address[];
    customers?:PartialContact[];
    provider?:PartialContact[];
}

export interface InsertedContact {
    mail?:string;
    name:string;
    code?:string;
    note?:string;
    phone:string;
    addresses?:Address[];
    customers?:PartialContact[];
    provider?:PartialContact[];
}

