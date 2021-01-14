import { Glass,DetailedGlass} from "../models/glass.model";
import { DetailedService, Service } from "../models/service.model";

//list of service collections
export interface ServicesConfigVM {
    services:Service[];
    loading:boolean;
    error?: string;
}


//Service  fiche 
export interface DetailedServiceVM{
    service:DetailedService;
    loading:boolean;
    error?:string;
}
