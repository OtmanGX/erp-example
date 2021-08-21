import { SalesCompany, SalesCustomer } from './quotation';
import { Product_draft } from './product';
import { Amount } from './amount';

export interface Order {
  id: number;
  draft_id: number;
  customer: SalesCustomer;
  contact_id?: string;
  delivery_status: string;
  payment_status: string;
  date?: Date;
  deadline?: Date;
  company: SalesCompany;
  total_ttc: number;
  total_tax: number;
  total_ht: number;
  products?: Product_draft[];
  ref?: string;
  ref_num?: number;
  salepoint?: { name: string };
}

export interface DetailedOrder extends Order {
  draft_status: string;
}

export interface InsertedOrder {
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

export interface UpdateOrder{
  order_id:number;
  total_ttc: number;
  total_tax: number;
  total_ht: number;
  amounts: Amount[];
}

