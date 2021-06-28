
export class DraftInfos {
    id: number;
    status: string;
    customer: string;
    contact: string;
    date: string;
    company: string;
  }
export class Product {
    id: string;
    product_code?: string;
    label?: string;
    count?: number;
    heigth?: number;
    width: number;
    m2: number=0;
    ml: number=0;
    unit: string;
    price: number;
    quantity:number=0;
    total_price: number=0;
    company_name?: string;
    warehouse_id?:string;
    glass_draft?:{
      id:string
    }
  }

  export class SalesItem{

    id: string;
    product_code: string;
    label: string;
    unit: string;
    price?: number;
    quantity:number;
    total_price?: number=0;
    company_name?: string;
    warehouse_id?:string;
    substance_id?:string;
     
  }

  export class Intermediate_Data{
    data?:Product;
    product_type:string;
    row?:Product;
    companies:KeyValue[];
    warehouses:KeyValue[];
  }
  class KeyValue{
    key:string;
    value:string;
    company_id?:string;
  }

