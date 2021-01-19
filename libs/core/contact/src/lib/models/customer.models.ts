import { MetaData } from "@tanglass-erp/core/shared";
import { InsertedContact } from "./contact.models";
import { Address ,PartialContact} from "./shared.models";

export interface Customer {
    id: string;
    ICE?: string;
    IF?: string;
    mail?: string;
    code?:string;
    name: string;
    phone: string;
    type?:string;

}

export interface DetailedCustomer extends MetaData {
    id: string;
    ICE?: string;
    IF?: string;
    mail?: string;
    code?:string;
    name: string;
    phone: string;
    note?: string;
    website?: string;
    FAX?: string;
    type?:string;
    contacts?:PartialContact[];
    addresses?:Address[];
}

export interface InsertedCustomer {
    ICE?: string;
    IF?: string;
    mail?: string;
    name: string;
    code?:string;
    phone: string;
    note?: string;
    website?: string;
    FAX?: string;
    type?:string;
    contacts?:InsertedContact[];
    addresses?:Address[];
}







