import { Companie } from "./companie";
import { SalePoint } from './sales-points';
export interface User {
  id?: number;
  FirstName: string;
  LastName: string;
  civilité: string;
  address: string;
  phone: string;
  CIN: string;
  role: string;
  email?: string;
  departement: string;
  companies: Companie[];
  salepoints: SalePoint[];
}
