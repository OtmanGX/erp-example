export interface Data {
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
    company_name: string;
  }

export const ELEMENT_DATA: Data[] = [
    {
      id: '1', product_code: 'VC6', label: 'verre clair 6mm', count: 2,
      heigth: 1.3, width: 0.9, m2: 2.34, ml: 8.8, unit: 'm²', price: 98, total_price: 229.32, company_name: 'Tanglass',
    },
    {
      id: '2', product_code: 'VC6', label: 'verre clair 6mm', count: 1,
      heigth: 1.3, width: 0.9, m2: 2.34, ml: 8.8, unit: 'm²', price: 98, total_price: 229.32, company_name: 'Tanglass',
    },
    {
      id: '3', product_code: 'VC8', label: 'verre clair 8mm', count: 3,
      heigth: 1.3, width: 0.9, m2: 2.34, ml: 8.8, unit: 'm²', price: 98, total_price: 229.32, company_name: 'Tanglass',
    },
    {
      id: '4', product_code: 'VC4', label: 'verre clair 4mm', count: 4,
      heigth: 1.3, width: 0.9, m2: 2.34, ml: 8.8, unit: 'm²', price: 98, total_price: 229.32, company_name: 'Tanglass',
    },
  ];