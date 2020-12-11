import { User } from "./users";
import { Companie } from "./companie";
export interface SalePoint {
  id?: number;
  name: string;
  address:string;
  phone?: string;
  Fax?: string;
  email?: string;
  users:User[];
  companie:Companie;

}
