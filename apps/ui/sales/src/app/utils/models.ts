export class GlassForm{
    product
}
export class DraftInfos {
    id: number;
    status: string;
    customer: string;
    contact: string;
    date: string;
    company: string;
  }
export class DraftItem {
    id: string;
    product_code: string;
    label: string;
    count: number;
    heigth: number;
    width: number;
    m2: number;
    ml: number;
    unit: string;
    price: number;
    total_price: number;
    company_name?: string;
  }

  export class Intermediate_Data{
    data?:DraftItem
    product_type:string
    row?:DraftItem
  }