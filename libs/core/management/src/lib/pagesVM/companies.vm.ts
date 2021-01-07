import { Companie } from "../models/companies.models";

//list of companies
export interface CompaniesVM {
    companies:Companie[];
    loading:boolean;
    error?: string;
}


//company fiche 
export interface DetailedCompanyVM{
    company:Companie;
    loading:boolean;
    error?:string;
}