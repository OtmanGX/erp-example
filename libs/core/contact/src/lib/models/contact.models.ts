import { MetaData } from "libs/core/shared/metaData";
import { InsertedCustomer,AffectedCustomer } from "./customer.models";
import { InsertedProvider,AffectedProvider} from "./provider.models";
import { Address } from "./shared.models";




export interface Contact{
    id:string;
    mail?:string;
    code?:string;
    name:string;
    note?:string;
    phone:string;
}

export interface DetailedContact extends InsertedContact{
    id:string;

}

export interface InsertedContact extends MetaData {
    mail?:string;
    name?:string;
    code?:string;
    note?:string;
    phone?:string;
    addresses?:Address[];
    customers?:InsertedCustomer[];
    providers?:InsertedProvider[];
    affectedCustomers?:AffectedCustomer[];
    affectedProviders?:AffectedProvider[];
}


export interface AffectedContact{
    contactid?:string
}
