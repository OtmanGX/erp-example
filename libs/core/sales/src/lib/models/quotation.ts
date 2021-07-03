import { Product_draft } from './product';
import { Amount } from './amount';

export interface Quotation {
  id: number;
  draft_id: number;
  ref?: string;
  status?: string;
  customer: SalesCustomer;
  salepoint: {name:string};
  contact_id?: string;
  date?: Date;
  deadline?: Date;
  company: SalesCompany;
  total_ttc: number;
  total_tax: number;
  total_ht: number;
  products?: Product_draft[];
  ref_num?: number;
}

export interface SalesCustomer {
  id?: string;
  code?: string;
  name: string;
  phone: string;
}

export interface SalesCompany {
  id: string;
  name: string;
}


export interface InsertedQuotation {
    id: number;
    draft_id: number;
    customer_id: string;
    contact_id?: string;
    date?: Date;
    deadline?: Date;
    company_id: string;
    total_ttc: number;
    total_tax: number;
    total_ht: number;
    products: Product_draft[];
    amounts: Amount[];
  }


