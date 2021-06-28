import { DeliveryStatus, PaymentMethod } from '../enums/delivery';
import { MetaData } from '@tanglass-erp/core/common';
import { Company } from '@tanglass-erp/core/product';

export interface DeliveryForm extends MetaData {
  id: string;
  order_id: number;
  status: DeliveryStatus | string;
  predicted_date: Date;
  isReturned: boolean;
  client: {
    name: string;
    mail?: string;
  };
  company: Company;
  contact?: {
    name: string;
    mail?: string;
    phone: string;
  };
  ref?: String;
  // delivery_lines: DeliveryLine[];
  payment_method: PaymentMethod | string;
  amount_ttc: number;
  amount_ht: number;
  amount_tva: number;
}

export interface InsertedDeliveryForm extends MetaData {
  id?: string;
  order_id: number;
  status: DeliveryStatus;
  predicted_date: Date;
  isReturned?: boolean;
  client_id: string;
  company_id: string;
  contact_id: string;
  delivery_lines?: DeliveryLine[];
  payment_method: PaymentMethod;
  amount_ttc: number;
  amount_tva: number;
  amount_ht: number;

  // Extra fields needed to print deliveryLine
  ref?: string;
  client?: {
    name: string;
    mail?: string;
  };
  company?: Company;
  contact?: {
    name: string;
    mail?: string;
    phone: string;
  };
  order?: {
    ref?: string;
  };
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

export type deliveryFilter = {
  dateStart?: Date;
  dateEnd?: Date;
  status?: string;
};
