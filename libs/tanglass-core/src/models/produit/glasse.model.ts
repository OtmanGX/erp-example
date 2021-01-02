
export class MatièrePremière {
  id?: number;
  code:string = '';
  type: string = '';
  color:string = '';
  label: string = '';
  prix_Achat: number = 0;
  prix_default: number = 0;
  prix_min: number = 1;
  prix_max: number = 1;
  epaisseur: number = 0;
  tags: string[] = [];
  companie:string[]=[];
}

export class VerreClient {
  id?: number;
  code:string='';
  libelle: string='';
  epaisseur: number=0;
  tags: string[] =[];
}

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

export class Mat {
  id? : number;
  type: string;
}
