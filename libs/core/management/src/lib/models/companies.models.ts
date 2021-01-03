
export class Companie{
    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email:string;
    name:string;
    phone:string;
}


export class DetailedCompanie{
    id:string;

    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email:string;
    name:string;
    phone:string;

    website:string;
    createdAt:Date;
    createdBy:string;
    updatedAt:Date;
    updatedBy:string;   // other details gonna be added after completing other modules (warehouses , products ..) 
}
