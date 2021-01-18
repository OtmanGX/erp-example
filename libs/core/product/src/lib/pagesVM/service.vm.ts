import { Glass } from "../models/glass.model";
import { DetailedService, Service, ServiceConfig} from "../models/service.model";
//list of services
export interface ServicesVM {
    services:Service[];
    loading:boolean;
    error?: string;
}


//service  fiche 
export interface DetailedServiceVM{
    service:DetailedService;
    loading:boolean;
    error?:string;
}


//service  creation 
export interface CreationServiceVM{
    serviceConfigs:ServiceConfig[];
    loading:boolean;
    error?:string;
}
