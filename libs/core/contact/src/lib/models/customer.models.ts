import { MetaData } from "@tanglass-erp/core/shared";
import { Address } from "./address.model";
import { Contact } from "./contact.models";

export interface Customer {
    id: string;
    ICE?: string;
    IF?: string;
    code?: string;
    mail?: string;
    name: string;
    phone: string;
    type?:string;
}

export interface DetailedCustomer extends MetaData {
    id: string;
    ICE?: string;
    IF?: string;
    code?: string;
    mail?: string;
    name: string;
    phone: string;
    note?: string;
    website?: string;
    FAX?: string;
    type?:string;
    contacts?:Contact[];
    addresses?:Address[];
}









