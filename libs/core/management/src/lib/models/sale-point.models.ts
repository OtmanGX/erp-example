
import { MetaData } from "libs/core/shared/metaData";
import { UsersProfileForSalePoint } from "./user.models";


export interface SalePoint {
  id: string;
  address: string;
  email?: string;
  fax?: string;
  name: string;
  phone: string;
}

export interface DetailedSalePoint extends MetaData {
  id: string;
  address: string;
  email: string;
  fax: string;
  name: string;
  phone: string;
  usersProfiles: UsersProfileForSalePoint[];
}


export interface SalePointForUser {
  name: string;
  phone: string;
  address: string;
}

