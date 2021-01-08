import { Provider, DetailedProvider } from "../models/provider.models";
import { Contact } from "../models/contact.models";
//list of Providers
export interface ProvidersVM {
    providers:Provider[];
    loading:boolean;
    error?: string;
}


//Provider fiche 
export interface DetailedProviderVM{
    provider:DetailedProvider;
    loading:boolean;
    error?:string;
}


//Provider  Creation or editing 

export interface ProviderCreationVM{

    contacts:Contact[];
    loading:boolean;
    error?:string;
    
}