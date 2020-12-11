import { User } from "./users";
import {SalePoint  } from "./sales-points";
export interface Companie {
  id?: number;
  name: string;
  ICE?: string;
  IF?: string;
  RC?:string;
  CNSS?:string;
  address:string;
  phone?: string;
  Fax?: string;
  email?: string;
  webSite?: string;
  users:User[];
  salePoints:SalePoint[];
}
