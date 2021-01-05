import { MetaData } from '@tanglass-erp/core/shared';

export interface Companie{

    id:string;
    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email?:string;
    name:string;
    phone:string;
}


export interface DetailedCompanie extends MetaData{
    id:string;
    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email?:string;
    name:string;
    phone:string;
    website?:string;
    
}





