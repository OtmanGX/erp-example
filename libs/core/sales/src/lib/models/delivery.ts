import { DeliveryStatus, PaymentMethod } from '../enums/delivery';
import { Order } from '@tanglass-erp/core/sales';
import { MetaData } from '@tanglass-erp/core/common';
import { Contact, Customer } from '@tanglass-erp/core/contact';
import { Company } from '@tanglass-erp/core/product';


export interface DeliveryForm extends MetaData {
  id: string;
  orders: Order[];
  status: DeliveryStatus;
  predicted_date: Date;
  client: Customer;
  company: Company;
  contact: Contact;
  delivery_lines: DeliveryLine[];
  payment_method: PaymentMethod;
}


export interface InsertedDeliveryForm extends MetaData {
  id: string;
  orders: number[];
  status: DeliveryStatus;
  predicted_date: Date;
  client: string;
  company: string;
  contact: string;
  delivery_lines?: DeliveryLine[];
  payment_method: PaymentMethod;
}


export interface DeliveryLine {
  id?: string;
  delivery: string;
  product: any;
  total: number;
  delivered: number;
  company_name?: string;
  product_label?: string;
  amount?: number;
  isReturned?: boolean;
  toDeliver?: number; // For Form purpose only
}
