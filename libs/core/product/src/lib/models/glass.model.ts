
export interface Product {
 
  id?: number;
  code:string ;
  category: string ;
  label: string ;
  unit:string;
  price: number ;
  price_min: number ;
  price_max: number ;
  companies:string[];
}


export interface Mat {
  id? : number;
  type: string;
}


export interface Glass {

  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  Mat: Mat;
}
