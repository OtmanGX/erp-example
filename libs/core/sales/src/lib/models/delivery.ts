import { DeliveryStatus, PaymentMethod } from '../enums/delivery';
import { MetaData } from '@tanglass-erp/core/common';
import { Contact, Customer } from '@tanglass-erp/core/contact';
import { Company } from '@tanglass-erp/core/product';


export interface DeliveryForm extends MetaData {
  id: string;
  order: number;
  status: DeliveryStatus | string;
  predicted_date: Date;
  client: {
    name: string
    mail?: string
  };
  company: Company;
  contact?: {
    name: string
    mail?: string
    phone: string
  };
  // delivery_lines: DeliveryLine[];
  payment_method: PaymentMethod | string;
}


export interface InsertedDeliveryForm extends MetaData {
  id?: string;
  order: number;
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
  product: any;
  quantity: number;
  delivered: number;
  company_name: string;
  product_label?: string;
  amount?: number;
  isReturned: boolean;
  toDeliver?: number; // For Form purpose only
}
