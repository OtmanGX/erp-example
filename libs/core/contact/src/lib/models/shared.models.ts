import { InsertedContact } from "./contact.models";

export interface PartialContact {
    id?: string;
    name?: string;
    note?: string;
    phone?: string;
}

export interface Address {
    id?: string;
    address?: string;
    city?: string;
    zip?: string;
}

export interface ContactAddress {

    contactid?: string,
    providerid?: string,
    customerid?: string,
    addresses: Address[],
}

export interface AddressDB {
    contactid?: string;
    customerid?: string;
    providerid?: string;
    address: {
        data: Address
    }
}

// for inserting   a new contact to a customer/provider
export interface InsertContact {
    id: string,
    contact: InsertedContact
    
}

// for inserting   a new address to a contact/customer/provider

export interface InsertAddressContact {
    id: string,   
    address: Address

}
// for affecting an existing  contact to a customer/provider

export interface AffectContact {
    id: string,
    contactid: string
    
}