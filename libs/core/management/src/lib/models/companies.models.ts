
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

export interface DetailedCompanie{
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
    createdAt:Date;
    createdBy:string;
    updatedAt:Date;
    updatedBy:string;
}
