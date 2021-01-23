import { Address, AddressDB } from "../models/shared.models";
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
    console.log(obj)
    if (obj.addresses) {
        addresses = adaptAddress(obj.addresses)
    }

    if (obj.contacts || obj.affectedContacts) {

        contacts =
            [
                ...adaptAffectedContactsID(obj.affectedContacts),
                ...adaptContact(obj.contacts)
            ];
    }

    if (obj.customers || obj.affectedCustomers) {
        customers =
            [
                ...adaptAffectedCustomersID(obj.affectedCustomers),
                ...adaptCustomer(obj.customers)
            ];
    }

    if (obj.providers || obj.affectedProviders) {
        providers =

            [
                ...adaptAffectedProvidersID(obj.affectedProviders),
                ...adaptProvider(obj.providers)
            ];
    }

    let {affectedProviders,affectedCustomers,affectedContacts, ...value} = obj;
    console.log({ ...value, addresses, contacts, customers, providers })
    return { ...value, addresses, contacts, customers, providers }
}

export function adaptAffectedContactsID(affected: string[] = []): AffectedContact[] {
    if (affected) {

        let contacts = affected.map((id) =>
        ({
            contactid: id

        })
        )
        return contacts
    }
    return []
}
export function adaptAffectedCustomersID(affected: string[] = []): AffectedCustomer[] {
    if (affected) {
        let customers = affected.map((id) =>
        ({
            customerid: id

        })
        )
        return customers
    }
    return []

}
export function adaptAffectedProvidersID(affected: string[] = []): AffectedProvider[] {
    if (affected) {
        let providers = affected.map((id) =>
        ({
            providerid: id

        })
        )
        return providers
    }
    return []

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


