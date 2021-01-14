import { Glass } from "../models/glass.model";
import { DetailedServiceGlass, Service, ServiceGlass} from "../models/service.model";
//list of services
export interface ServicesVM {
    services:ServiceGlass[];
    loading:boolean;
    error?: string;
}


//service  fiche 
export interface DetailedServiceVM{
    service:DetailedServiceGlass;
    loading:boolean;
    error?:string;
}


//service  creation 
export interface CreationServiceVM{
    glasses:Glass[];
    loading:boolean;
    error?:string;
}
