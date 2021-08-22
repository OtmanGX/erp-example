import {
  Product_Product_Insert_Input,
  Product_Product_Unit_Enum,
  Product_AccessoryTypes_Enum,
} from '@tanglass-erp/infrastructure/graphql';
import { product_companies } from '../utils/dataAdapter';
export interface Product {
  id?: string;
  code: string;
  label: string;
  unit: Product_Product_Unit_Enum;
  price: number;
  priceMin?: number;
  priceMax?: number;
  companies?: Company[];
}

export interface InsertedProduct {
  id?: string;
  code: string;
  label: string;
  unit: Product_Product_Unit_Enum;
  price: number;
  priceMin?: number;
  priceMax?: number;
  product_companies: string[];
}
export interface Substance {
  id?: string;
  type?: string;
  code?: string;
  label?: string;
  unit?: string;
}

export interface Company {
  id?: string;
  name?: string;
}
