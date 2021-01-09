
export interface Product {
 
  id?: number;
  code:string ;
  type: string ;
  label: string ;
  price: number ;
  price_min: number ;
  price_max: number ;
  companies:string[];
}


export interface Mat {
  id? : number;
  type: string;
}


export interface Glasse {

  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  Mat: Mat;
}
