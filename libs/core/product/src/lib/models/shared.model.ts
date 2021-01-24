import {
  Product_Product_Insert_Input,
  Product_Product_Unit_Enum,
  Product_AccessoryTypes_Enum
} from '@tanglass-erp/infrastructure/graphql';

export interface Product {

  id?: string;
  code: string;
  label: string;
  unit: Product_Product_Unit_Enum;
  price: number;
  priceMin?: number;
  priceMax?: number;
  companies: Company[];
}

export interface InsertedProduct {

  id?: string;
  code: string;
  label: string;
  unit: Product_Product_Unit_Enum;
  price: number;
  priceMin?: number;
  priceMax?: number;
  product_companies: { data: AffectedCompany[] };
}
export interface Substance {
  id?: string;
  type: string;
  cost?: number;
}

export interface Company {
  id?: string,
  name?: string
}

interface AffectedCompany {

  companyid: string

}

