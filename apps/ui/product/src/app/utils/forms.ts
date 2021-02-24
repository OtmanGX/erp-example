import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { paramOptions } from './enum';
import {
  Product,
  Consumable,
  Glass,
  Accessory,
  Service,
  ServiceConfig,
  Product_Product_Unit_Enum,
  Product_AccessoryTypes_Enum,
  Product_ConsumableCategory_Enum,
} from '@TanglassStore/product/index';
import { Observable } from 'rxjs';

export interface ParamField {
  name: string;
  type: string;
  [key: string]: any;
}

type ListObservable = Array<any> | Observable<any>;

function getParams(params) {
  const equivalence = new Map([
    [paramOptions.TEXT, {type: "input", inputType: "text"}],
    [paramOptions.NUMBER, {type: "input", inputType: "number"}],
    [paramOptions.LIST, {type: "inputTag", inputType: "text", options: []}],
  ]);

  const value = params.map(elem => <FieldConfig>
    ({...equivalence.get(elem.type), label: elem.name, name: "name", value: null})
  );
  return value;
}

const regConfigProduct = (data?: Product, listCompanies: ListObservable = []) => [
  {type: "input", label: "Code", inputType: "text", name: "code", value: data?.code,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Désignation", inputType: "text", name: "label", value: data?.label,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "inputSelect", label: "Unité", inputType: "text", name: "unit", value: data?.unit,
    options: Object.values(Product_Product_Unit_Enum).map(item => ({key: item, value: item})),
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix", inputType: "number", name: "price", value: data?.price,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix min", inputType: "number", name: "priceMin",
    value: data?.priceMin,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix max", inputType: "number", name: "priceMax",
    value: data?.priceMax,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", label: "Sociétés", multiple: true, name: "product_companies", value: data?.companies,
    options: listCompanies}
];


const regConfigAccessory = (data?: Accessory, listCompanies: ListObservable = []) => [
  {
    name: 'accessory',
    label: 'Accessoire',
    headerVisible: false,
    fields: [
      {type: "input", label: "Quota", inputType: "number", name: "quota", value: data?.quota},
      {type: "inputSelect", label: "Type", inputType: "text", name: "category", value: data?.category,
        options: Object.values(Product_AccessoryTypes_Enum).map(item => ({key: item, value: item}))},

    ]
  },
  {
    name: "product",
    label: "Produit",
    headerVisible: false,
    fields: regConfigProduct(data?.product, listCompanies)
  }
];


const regConfigConsumable = (data?: Consumable, listCompanies: ListObservable = []) => [
  {
    name: 'consumable',
    label: 'Consommable',
    headerVisible: false,
    fields: [
      {
        type: "inputSelect", label: "Catégorie", inputType: "text", name: "category", value: data?.category,
        options: Object.values(Product_ConsumableCategory_Enum).map(item => ({key: item, value: item}))
      },
    ]
  },
  {
    name: "product",
    label: "Produit",
    headerVisible: false,
    fields: regConfigProduct(data?.product, listCompanies)
  },
];


const regConfigGlass = (data?: Glass, listCompanies: ListObservable = [],
   listTypes: ListObservable = [], listColors: ListObservable = []) => [
  {
    name: "product",
    label: "Produit",
    headerVisible: false,
    fields: regConfigProduct(data?.product, listCompanies)
  },
  {
    name: 'glasse',
    label: 'Verre',
    headerVisible: false,
    fields: [
      {type: "select", label: "Type", multiple: false, name: "type", value: data?.type, options: listTypes },
      {type: "select", label: "Couleur", multiple: false, name: "color", value: data?.color, options: listColors },
      {type: "input", label: "Epaisseur", inputType: "number", name: "thickness", value: data?.thickness},
    ]
  }
];


const regConfigServiceConfig = (data?: ServiceConfig) => [
  {
    name: "service",
    label: "Service",
    headerVisible: false,
    fields: [
      {type: "input", label: "Nom", inputType: "text", name: "name", value: data?.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Etiquette d\'usine", inputType: "text", name: "labelFactory",
        value: data?.labelFactory, validations: [FormDialog.REQUIRED]},
    ]
  },
  {
    name: "params",
    label: "Paramètres",
    headerVisible: true,
    fields: []
  },
];

const regConfService = (data?: Service, listCompanies: ListObservable = [], params?: ParamField[]) => [
  {
    name: "product",
    label: "Produit",
    headerVisible: true,
    fields: regConfigProduct(data?.product, listCompanies)
  },
  {
    name: "optionalParamValues",
    label: "Paramètres",
    headerVisible: true,
    fields: params ? getParams(params) : []
  }
];

const regParamForm = [
  {type: "input", label: "Nom", inputType: "text", name: "name", value: null,
    validations: [FormDialog.REQUIRED]
  },
  {type: "select", label: "Type", inputType: "text", name: "type", value: null,
    options: Object.values(paramOptions).map(elem => ({key: elem, value: elem})),
    validations: [FormDialog.REQUIRED]
  },
];


const regConfigServiceConsumable = (data?, services: ListObservable = []) => [
  {type: "select", label: "Service", inputType: "text", name: "service", value: data?.service,
    options: services},
  {type: "input", label: "Quota", inputType: "text", name: "quota", value: data?.quota},
  {type: "select", label: "Consommable", inputType: "text", name: "consumable", value: data?.consumable,
    options: []},
];


const regConfigServiceGlass = (data?, services: ListObservable = [], glasses: ListObservable = []) => [
  {type: "select", label: "Service", inputType: "text", name: "service", value: data?.service,
    options: services, validations: [FormDialog.REQUIRED]},
  {type: "input", label: "Etiquette d\'usine", inputType: "text", name: "labelFactory",
    value: data?.labelFactory, validations: [FormDialog.REQUIRED]},
  {type: "select", label: "Verre", inputType: "text", name: "glasse", value: data?.glasse,
    options: glasses, validations: [FormDialog.REQUIRED]},
];

const regConfigSupplies = (data?: Accessory, listCompanies: ListObservable = []) => [
  {
    name: 'supply',
    label: 'Fournitures',
    headerVisible: false,
    fields: [

    ]
  },
  {
    name: "product",
    label: "Produit",
    headerVisible: false,
    fields: regConfigProduct(data?.product, listCompanies)
  }
];


export {
  regConfigAccessory,
  regConfigConsumable,
  regConfigGlass,
  regConfigServiceConfig,
  regConfService,
  regParamForm,
  regConfigServiceConsumable,
  regConfigServiceGlass,
  regConfigSupplies
};
