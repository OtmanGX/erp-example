import { UsersProfileForSalePoint } from "./user.models";
import { MetaData } from '@tanglass-erp/core/shared';


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
  email?: string;
  fax?: string;
  name: string;
  phone: string;
  usersProfiles: UsersProfileForSalePoint[];
}


export interface SalePointForUser {
  name: string;
  phone: string;
  address: string;
}

