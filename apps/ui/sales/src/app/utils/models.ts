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
    count: number=0;
    heigth: number;
    width: number;
    m2: number=0;
    ml: number=0;
    unit: string;
    price: number;
    quantity:number=0;
    total_price: number=0;
    company_name?: string;
  }

  export class Intermediate_Data{
    data?:DraftItem
    product_type:string
    row?:DraftItem
  }