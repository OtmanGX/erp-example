
export interface PartialContact{
    id?:string;
    name?:string;
    note?:string;
    phone?:string;
}

export interface Address {
    id?: string;
    address?: string;
    city?: string;
    zip?: string;
}

export interface ContactAddress{

    contactid?:string,
    providerid?:string,
    customerid?:string,
    addresses:Address[],
}

export interface AddressDB {
    contactid?:string;
    customerid?:string;
    providerid?:string;
    address: {
        data: Address
    }
}