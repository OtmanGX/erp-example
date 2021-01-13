import { Mat, Product } from './glass.model';

export interface Accessory {
 
  id?: number;
  name:string;
  type: string;
  quota: number ;
  Mat: Mat;
  product: Product;
}


