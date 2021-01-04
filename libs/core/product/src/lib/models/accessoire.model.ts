import { Mat, Product } from './glasse.model';
import { DateFields } from '@tanglass-erp/core/shared';

@DateFields
export class Accessory {
  public static columnDefs(prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      {headerName: 'Accssoire', children: [
          { field: prefix + 'name', headerName: 'Nom', type: "textColumn"},
          { field: prefix + 'type', headerName: 'Type', type: "textColumn"},
          { field: prefix + 'quota', headerName: 'Quota', type: "numberColumn"}
        ]
      },
      {headerName: 'Produit',
        children: Product.columnDefs(prefix + 'product')
      },
    ];
  }
  id?: number;
  name:string='';
  type: string='';
  quota: number = 0;
  Mat: Mat;
  product: Product;
}


