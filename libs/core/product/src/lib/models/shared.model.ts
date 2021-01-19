export interface Product {

    id?: string;
    code: string;
    label: string;
    unit: string;
    price: number;
    price_min?: number;
    price_max?: number;
    companies: Company[];
  }
  
  
  export interface Substance {
    id?: string;
    type: string;
    cost?:number;
  }

  export interface Company{
    id?:string,
    name?:string
  }