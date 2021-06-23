import { Company } from '@tanglass-erp/core/product';
import { PaymentMethod } from '@tanglass-erp/core/sales';
import { MetaData } from '@tanglass-erp/core/common';

export interface Invoice extends MetaData {
  id?: string;
  client: {
    name: string
    mail?: string
  };
  company?: Company;
  contact?: {
    name: string
    mail?: string
    phone: string
  };
  payment_method: PaymentMethod | string;
  date: Date;
  ref?: String;
  amount_ttc: number
  amount_ht: number
  amount_tva: number
  deliveries?: Array<{
    delivery_id: string
  }>
}


export interface InsertedInvoice {
  id?: string;
  client: string;
  payment_method: PaymentMethod | string;
  company: string;
  contact?: string;
  date: Date;
  deliveries: Array<{
    delivery_id: string
  }>
  invoice_lines: Array<InvoiceLine>
  amount_ttc: number
  amount_ht: number
  amount_tva: number
}

export interface UpdatedInvoice extends InsertedInvoice {
  id: string;
}

export interface InvoiceLine {
  id?: string;
  invoice_id?: string;
  product_code: string;
  product_label: string;
  quantity: number;
  unit_price: number;
  total: number;
}


export type invoiceFilter = {
  dateStart?: Date,
  dateEnd?: Date,
}
