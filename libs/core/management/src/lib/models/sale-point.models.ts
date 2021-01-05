import {UsersProfile  } from "./user.models";

export interface SalePoint{
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
  }

export interface DetailedSalePoint {
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
    usersProfiles:UsersProfile[];
    createdAt:Date;
    createdBy:string;
    updatedAt:Date;
    updatedBy:string;
  }


