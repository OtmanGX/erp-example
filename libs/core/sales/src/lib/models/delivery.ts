import { DeliveryStatus, PaymentMethod } from '../enums/delivery';
import { MetaData } from '@tanglass-erp/core/common';
import { Company } from '@tanglass-erp/core/product';


export interface DeliveryForm extends MetaData {
  id: string;
  order: number;
  status: DeliveryStatus | string;
  predicted_date: Date;
  isReturned: boolean;
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
  ref?: String;
  // delivery_lines: DeliveryLine[];
  payment_method: PaymentMethod | string;
  amount_ttc: number
  amount_ht: number
  amount_tva: number
}


export interface InsertedDeliveryForm extends MetaData {
  id?: string;
  order: number;
  status: DeliveryStatus;
  predicted_date: Date;
  isReturned?: boolean;
  client: string;
  company: string;
  contact: string;
  delivery_lines?: DeliveryLine[];
  payment_method: PaymentMethod;
  amount_ttc: number;
  amount_tva: number;
  amount_ht: number;
}


export interface DeliveryLine {
  id?: string;
  product: any;
  unit_price: number;
  quantity: number;
  delivered: number;
  product_label?: string;
  amount?: number;
  toDeliver?: number; // For Form purpose only
}
