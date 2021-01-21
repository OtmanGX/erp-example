import { Address ,AddressDB} from "../models/shared.models";
import { InsertedContact } from "../models/contact.models";
import { AffectedCustomer, InsertedCustomer } from "../models/customer.models";
import { AffectedProvider, InsertedProvider } from "../models/provider.models";
import {
    InsertCustomerMutationVariables,
    InsertContactMutationVariables,
    InsertProviderMutationVariables
} from "@tanglass-erp/infrastructure/graphql";



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

export interface AffectedContact {
    contactid?: string
}

type objToAdapt = InsertedProvider & InsertedCustomer & InsertedContact;
type adaptedObj = InsertContactMutationVariables & InsertCustomerMutationVariables & InsertProviderMutationVariables;


export function dataAdapter(obj: objToAdapt): adaptedObj {
    let addresses: AddressDB[];
    let contacts: Array<InsertedContactDB | AffectedContact>;
    let customers: Array<InsertedCustomerDB | AffectedCustomer>;
    let providers: Array<InsertedProviderDB | AffectedProvider>;
    let oldProviders = obj.providers
    if (obj.addresses) {
        addresses = adaptAddress(obj.addresses)
    }

    if (obj.contacts||obj.affectedContacts) {
        console.log('hello')
       contacts= [...obj.affectedContacts,...adaptContact(obj.contacts)]; 
       delete obj.affectedContacts
    }

    if (obj.customers||obj.affectedCustomers) {
        customers = [...obj.affectedCustomers, ...adaptCustomer(obj.customers)];
        delete obj.affectedCustomers

    }

    if (obj.providers||obj.affectedProviders) {
        providers = [ ...obj.affectedProviders, ...adaptProvider(obj.providers) ];
        delete obj.affectedProviders

    }
    return { ...obj, addresses, contacts, customers, providers }
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


