import { DeliveryStatus } from '../enums/delivery';
import { Order } from '@tanglass-erp/core/sales';
import { MetaData } from '@tanglass-erp/core/common';
import { Contact, Customer } from '@tanglass-erp/core/contact';
import { Company } from '@tanglass-erp/core/product';


export interface DeliveryForm extends MetaData {
  id: string;
  order: Order;
  status: DeliveryStatus;
  predicted_date: Date;
  client: Customer;
  company: Company;
  contact: Contact;
  delivery_lines: DeliveryLine[];
}


export interface InsertedDeliveryForm extends MetaData {
  id: string;
  order: Order;
  status: DeliveryStatus;
  predicted_date: Date;
  client: string;
  company: string;
  contact: string;
  delivery_lines: DeliveryLine[];
}


export interface DeliveryLine {
  id: string;
  product: any;
  rest: number;
  delivered: number;
}
