import { Address } from "../models/shared.models";
import {  InsertedContact } from "../models/contact.models";
import {  InsertedCustomer } from "../models/customer.models";
import {  InsertedProvider } from "../models/provider.models";
import {
    InsertCustomerMutationVariables,
    InsertContactMutationVariables,
    InsertProviderMutationVariables
} from "@tanglass-erp/infrastructure/graphql";


 interface AddressDB {
    address: {
        data: {
            address?: string,
            city?: string,
            zip?: string,
            id?: string,
        }
    }
}

type objToAdapt = InsertedContact | InsertedCustomer | InsertedProvider;
type adaptedObj = InsertContactMutationVariables & InsertCustomerMutationVariables & InsertProviderMutationVariables;
 
export class DataAdapter<T extends objToAdapt>    {


    constructor(obj: T) {


        let addresses: AddressDB[] = obj.addresses.map((address) =>
        ({
            address:
            {
                data: address
            }
        })
        )
        if (obj) {
          Object.assign(this,{addresses} ,obj);
        }

    }
}





