import { DeliveryStatus } from '../enums/delivery';

export interface DeliveryForm {
  id: string;
  order_id: string;
  status: DeliveryStatus;
  predicted_date: Date;
  client_id: string;
  company_id: string;
  contact_id: string;
}



export interface DeliveryLine {
  product: any;
  rest: number;
  delivered: number;
}
