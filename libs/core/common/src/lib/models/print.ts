export interface ProductToPrint {
  label: string;
  product_code: string;
  type: string;
  quantity: number;
  price: number;
  total_price: number;
  [key: string]: any;
}
