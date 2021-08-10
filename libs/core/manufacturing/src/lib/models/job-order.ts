import { Product_draft } from '@tanglass-erp/core/sales';
export interface JobOrder {
  id: number;
  date: Date;
  order_ref: string;
  ref?: string;
  status: string;
  glass_drafts?: JobProduct[];
}

export interface JobProduct {
  id: string;
  consumable_drafts?: Dependency[];
  service_drafts?: Dependency[];
  product_draft?: {
    type?: string;
    label?: string;
    count?: number;
    heigth?: number;
    width?: number;
    product_code: string;
  };
  manufacturing_lines?: ManufacturingLine[];
}

export interface Dependency {
  labelFactory?: string;
  id: string;
  dependent_id?: string;
}

export interface InsertedJobOrder {
  order_ref: string;
  isReparing?: boolean;
  ids: { id: string }[];
}

export interface InsertedManufacturingLine {
  glass_id: string;
  count: number;
}

export interface ManufacturingLine {
  glass_id: string;
  id: number;
  status: string;
  manufacturing_services:string[];
  manufacturing_consumables: string[];
}

