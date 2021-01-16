import { Address, PartialContact } from "../models/shared.models";
import { DetailedContact, InsertedContact } from "../models/contact.models";
import { DetailedCustomer, InsertedCustomer } from "../models/customer.models";
import { DetailedProvider, InsertedProvider } from "../models/provider.models";
import {
    InsertCustomerMutationVariables,
    InsertContactMutationVariables,
    InsertProviderMutationVariables
} from "@tanglass-erp/infrastructure/graphql";


interface AddressDB {
    address: {
        data:Address
    }
}
interface InsertedContactDB {
    contact: {
        data: InsertedContact
    }
}
interface InsertedCustomerDB {
    customer: {
        data: InsertedCustomer
    }
}
interface InsertedProviderDB {
    provider: {
        data: InsertedProvider
    }
}

interface baseModel{
    id:string;
}

type objToAdapt = InsertedProvider &InsertedCustomer&InsertedContact;
type adaptedObj = InsertContactMutationVariables & InsertCustomerMutationVariables & InsertProviderMutationVariables;


export function dataAdapter(obj: objToAdapt) {
    let addresses: AddressDB[];
    let contacts: InsertedContactDB[];
    let customers:InsertedCustomerDB[];
    let providers:InsertedProviderDB[];

    if (obj.addresses) {
        addresses = adaptAddress(obj.addresses)
    }
    if (obj.contacts) {
        contacts = adaptContact(obj.contacts)

    }
    if (obj.customers) {
        customers = adaptCustomer(obj.customers)

    }
    if (obj.provider) {
        providers= adaptProvider(obj.provider)

    }
  return {...obj,addresses,contacts,customers,providers}
}

export function adaptAddress(address: Address[]): AddressDB[] {
    let addresses = address.map((address) =>
    ({
        address:
        {
            data: address
        }
    })
    )
    return addresses

}



export function adaptContact(data: InsertedContact[]): InsertedContactDB[] {
    let contacts = data.map((contact) =>
    ({
        contact:
        {
            data: contact
        }
    })
    )
    return contacts

}

export function adaptCustomer(data: InsertedCustomer[]): InsertedCustomerDB[] {
    let customers = data.map((customer) =>
    ({
        customer:
        {
            data: customer
        }
    })
    )
    return customers

}

export function adaptProvider(data: InsertedProvider[]): InsertedProviderDB[] {
    let providers = data.map((contact) =>
    ({
        provider:
        {
            data: contact
        }
    })
    )
    return providers

}



export class DataAdapter<T extends objToAdapt>{
    constructor(obj: T) {

        let addresses = obj.addresses.map((address) =>
        ({
            address:
            {
                data: address
            }
        })
        )
        if (obj) {
            Object.assign(this, { addresses }, obj);
        }
    }
}
