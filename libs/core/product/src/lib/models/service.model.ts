import { Glasse } from './glasse.model';
import { Consumable } from './consommable.model';
import { DateFields } from '@tanglass-erp/core/shared';
import { optionalServiceParam } from './service_params';

@DateFields
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
