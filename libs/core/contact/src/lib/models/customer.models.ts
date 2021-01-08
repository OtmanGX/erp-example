import { MetaData } from "@tanglass-erp/core/shared";
import {PartialContact  } from "./shared.models";
import { Address } from "./address.model";

export interface Customer {
    id: string;
    ICE: string;
    IF: string;
    code: string;
    mail: string;
    name: string;
    phone: string;
}

export interface DetailedCustomer extends MetaData {
    id: string;
    ICE: string;
    IF: string;
    code: string;
    mail: string;
    name: string;
    phone: string;
    note: string;
    website: string;
    FAX: string;
    contacts:PartialContact[];
    addresses:Address[];
}









