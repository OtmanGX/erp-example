import { Customer, DetailedCustomer } from "../models/customer.models";
import { Contact } from "../models/contact.models";

//list of Customers
export interface CustomersVM {
    customers:Customer[];
    loading:boolean;
    error?: string;
}


//Customer fiche 
export interface DetailedCustomerVM{
    customer:DetailedCustomer;
    loading:boolean;
    error?:string;
}


//Customer  Creation or editing 

export interface CustomerCreationVM{

    contacts:Contact[];
    loading:boolean;
    error?:string;
    
}