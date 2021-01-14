export interface Product {

    id?: number;
    code: string;
    category: string;
    label: string;
    unit: string;
    price: number;
    price_min: number;
    price_max: number;
    companies: string[];
  }
  
  
  export interface Substance {
    id?: number;
    type: string;
  }