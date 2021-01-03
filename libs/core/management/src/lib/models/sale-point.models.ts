import {UsersProfile  } from "./use.models";

export class SalePoint{
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
  }

export class DetailedSalePoint {
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
    createdBy:string;
    updatedBy:string;
    usersProfiles:UsersProfile[];
    createdAt:Date;
    updatedAt:Date;
  }


