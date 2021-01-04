import {UsersProfile  } from "./use.models";
import { DateFields } from '@tanglass-erp/core/shared';

export class SalePoint{
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
  }

@DateFields
export class DetailedSalePoint {
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
    usersProfiles:UsersProfile[];
  }


