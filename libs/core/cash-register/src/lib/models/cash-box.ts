import { MetaData } from '@tanglass-erp/core/common';

export interface CashBox extends MetaData {
  id: number;
  name: string;
  salepoint_id: string;
  balance: number;
  expenses;
  payments;
}


export interface InsertedCashBox {
  name: string;
  salepoint_id: string;
  balance: number;
}
