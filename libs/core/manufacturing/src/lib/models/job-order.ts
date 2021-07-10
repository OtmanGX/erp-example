export interface JobOrder {
  id: string;
  date: Date;
  order_ref: number;
  ref: string;
  status: string;
  type: string;
  glass_drafts: JobProduct[];
}

export interface JobProduct {
  id: string;
  consumable_drafts: Dependency[];
  service_drafts: Dependency[];
  product_draft: {
    count: number;
    heigth: number;
    width: number;
    product_code: string;
  };
}

export interface Dependency {
  labelFactory: string;
}
