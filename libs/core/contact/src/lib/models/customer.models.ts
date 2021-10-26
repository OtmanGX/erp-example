import { MetaData } from '@tanglass-erp/core/common';
import { InsertedContact } from './contact.models';
import { Address, PartialContact } from './shared.models';

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

export interface DetailedCustomer extends InsertedCustomer {
    id: string;
    contacts: PartialContact[];
}

export interface InsertedCustomer extends MetaData{
    ICE?: string;
    IF?: string;
    mail?: string;
    name?: string;
    code?:string;
    phone?: string;
    note?: string;
    website?: string;
    FAX?: string;
    type?:string; // individual or company
    contacts?:InsertedContact[];
    affectedContacts?:string[];
    addresses?:Address[];
}


export interface AffectedCustomer{
    customerid?:string
}










