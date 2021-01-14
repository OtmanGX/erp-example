import { Address } from "../models/address.model";
import { DetailedContact } from "../models/contact.models";
import { DetailedCustomer } from "../models/customer.models";
import { DetailedProvider } from "../models/provider.models";
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

type objToAdapt = DetailedContact | DetailedCustomer | DetailedProvider;
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





