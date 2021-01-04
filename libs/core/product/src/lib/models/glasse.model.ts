import { DateFields } from '@tanglass-erp/core/shared';

export class Product {
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    let fields = [
    { field: 'code', headerName: 'Code', type: "textColumn"},
    { field: 'label', headerName: 'Libellé', type: "textColumn"},
    { field: 'price', headerName: 'Prix de Vente', type: "numberColumn"},
    { field: 'price_max', headerName: 'Prix max', type: "numberColumn"},
    { field: 'price_min', headerName: 'Prix min', type: "numberColumn"},
    { field: 'type', headerName: 'Type'},
    { field: 'companies', headerName: 'Société'},
  ];
    if (prefix.length)
      fields.forEach((elem, index) =>
        fields[index].field = prefix + elem.field);
    return fields;
  }
  id?: number;
  code:string = '';
  type: string = '';
  label: string = '';
  price: number = 0;
  price_min: number = 1;
  price_max: number = 1;
  companies:string[]=[];
}


export class Mat {
  id? : number;
  type: string;
}


@DateFields
export class Glasse {
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      {
      headerName: 'Produit',
      children: Product.columnDefs(prefix + 'product')
     },
      {
        headerName: 'Verre', children: [
          { field: prefix + 'color', headerName: 'Couleur' },
          { field: prefix + 'thickness', headerName: 'Epaisseur', type: "numberColumn" },
      ]
    }
    ]
  }
  id?: number;
  type: string;
  color: string;
  thickness: string;
  product: Product;
  Mat: Mat;
}
