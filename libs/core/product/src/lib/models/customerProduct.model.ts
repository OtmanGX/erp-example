import { MetaData } from '@tanglass-erp/core/common';
import { Product, InsertedProduct } from './shared.model';

export interface CustomerProduct {
  id?: string;
  productcode: string;
  thickness: number;
}
