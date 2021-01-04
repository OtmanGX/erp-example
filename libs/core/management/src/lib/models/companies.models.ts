import { DateFields } from '@tanglass-erp/core/shared';

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

@DateFields
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
}
