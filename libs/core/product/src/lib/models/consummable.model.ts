import { Mat } from './glass.model';

export  interface Consumable {

  id?: number;
  code:string;
  label: string;
  Mat: Mat;
}
//
