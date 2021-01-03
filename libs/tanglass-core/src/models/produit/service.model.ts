import { Glasse, Product } from '@TanglassCore/models/produit/glasse.model';
import { Consumable } from '@TanglassCore/models/produit/consommable.model';


export class Service {
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      { field: prefix + 'name', headerName: 'Nom', type: "textColumn" },
      { field: prefix + 'defaultPriceUnit', headerName: 'Unité de prix par défault' },
    ]
  }
  id?: string;
  name:string='';
  defaultPriceUnit:string='';
  params: optionalServiceParam[] = [];

  constructor(name?: string, defaultPriceUnit?: string, params?: optionalServiceParam[]) {
    this.name = name;
    this.defaultPriceUnit = defaultPriceUnit;
    this.params = params;
  }
}

export class optionalServiceParam {
  id? : string;
  serviceID?: string;
  param: string = '';
}

export class optionalServiceParamValue {
  serviceGlasseID?: string;
  values: any;
}

export class ServiceGlasse {
  public static columnDefs () {
    return [
      {
        headerName: 'Service Glasse', children: [
          { field: 'labelFactory', headerName: 'Etiquette d\'usine', type: "textColumn" },
        ]
      },
      { headerName: 'Service', children: Service.columnDefs('service') },
      { headerName: 'Verre', children: Glasse.columnDefs('glasse') },
    ]
  }
  id? : string;
  glasse : Glasse;
  service: Service;
  labelFactory: string = '';
}


export class ServiceConsumable {
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      {
      headerName: 'service Consommable',
        children: [{ field: prefix + 'quota', headerName: 'Nom', type: "numberColumn" }]
      },
      {
        headerName: 'Service', children: Service.columnDefs('service')
      }
    ]
  }
  id? : string;
  quota: number = 0;
  consumable : Consumable;
  service: Service;
}

export class Coupe extends Service {
  epaisseur:number=2;
  outil:string='';
}

export class BordPolis extends Service {
  epaisseur:number=2;
  outil:string='';
  type:string='';
}

export class Trous extends Service  {
  epaisseur_min:number=2;
  epaisseur_max:number=19;
  diametre_min:number;
  diametre_max:number;
  outil:string='';
}

export class Encoche extends Service {
  epaisseur_min:number=2;
  epaisseur_max:number=19;
  outil:string='';
  type:string='';
}

export class Biseautage extends Service {
  type:string='';
}

export class Trempage extends Service  {
  epaisseur:number=2;
}

export class Bombage extends Service  {
}

export class Sablage extends Service {
  type:string='';
}

export class Peinture extends Service  {
}
export class Gravage extends Service  {
}
export class Aluminium extends Service  {
}
export class Pose extends Service  {
}





