import { FieldConfig, FormDialog } from '@tanglass-erp/material';
import { paramOptions } from './enum';

export interface ParamField {
  name: string;
  type: string;
}


function getParams(params) {
  const equivalence = new Map([
    [paramOptions.TEXT, {type: "input", inputType: "text"}],
    [paramOptions.NUMBER, {type: "input", inputType: "number"}],
    [paramOptions.LIST, {type: "inputTag", inputType: "text"}],
  ]);

  const value = params.map(elem => <FieldConfig>
    ({...equivalence.get(elem.type), label: elem.name, name: "name", value: null})
  );
  return value;
}

const regConfigProduct = (data?, listCompanies = []) => [
  {type: "input", label: "Code", inputType: "text", name: "code", value: data?.product?.code,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Désignation", inputType: "text", name: "label", value: data?.product?.label,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix", inputType: "number", name: "price", value: data?.product?.price,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix min", inputType: "number", name: "priceMin",
    value: data?.product?.price_min,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix max", inputType: "number", name: "priceMax",
    value: data?.product?.price_max,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", label: "Sociétés", multiple: true, name: "companies", value: data?.product?.companies,
    options: listCompanies}
];


const regConfigAccessory = (data?, listCompanies = []) => [
  {
    name: 'accessory',
    label: 'Accessoire',
    headerVisible: false,
    fields: [
      {type: "input", label: "Quota", inputType: "number", name: "quota", value: data?.quota},
      {type: "inputSelect", label: "Type", inputType: "text", name: "category", value: data?.type,
        options: []},
      
    ]
  },
  {
    name: "product",
    label: "Produit",
    headerVisible: false,
    fields: regConfigProduct(data?.product, listCompanies)
  }
];




const regConfigConsumable = (data?, listCompanies = []) => [
  {
    name: 'consumable',
    label: 'Consommable',
    headerVisible: false,
    fields: [
      {
        type: "input", label: "Code", inputType: "text", name: "code", value: data?.code,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {
        type: "input", label: "Désignation", inputType: "text", name: "label", value: data?.label,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {
        type: "input", label: "Type", inputType: "text", name: "category", value: data?.type,
        options: []
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


const regConfigGlass = (data?, listCompanies :any= []) => [
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
      {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: data?.type,
        options: []},
      {type: "inputSelect", label: "Couleur", inputType: "text", name: "color", value: data?.color,
        options: []
      },
      {type: "input", label: "Epaisseur", inputType: "text", name: "thickness", value: data?.thickness},
    ]
  }
];


const regConfigServiceConfig = (data?) => [
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

const regConfService = (data?, listCompanies = [], params?: ParamField[]) => [
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


const regConfigServiceConsumable = (data?, services = []) => [
  {type: "select", label: "Service", inputType: "text", name: "service", value: data?.service,
    options: services},
  {type: "input", label: "Quota", inputType: "text", name: "quota", value: data?.quota},
  {type: "select", label: "Consommable", inputType: "text", name: "consumable", value: data?.consumable,
    options: []},
];


const regConfigServiceGlass = (data?, services = [], glasses = []) => [
  {type: "select", label: "Service", inputType: "text", name: "service", value: data?.service,
    options: services, validations: [FormDialog.REQUIRED]},
  {type: "input", label: "Etiquette d\'usine", inputType: "text", name: "labelFactory",
    value: data?.labelFactory, validations: [FormDialog.REQUIRED]},
  {type: "select", label: "Verre", inputType: "text", name: "glasse", value: data?.glasse,
    options: glasses, validations: [FormDialog.REQUIRED]},
];


export {
  regConfigAccessory,
  regConfigConsumable,
  regConfigGlass,
  regConfigServiceConfig,
  regConfService,
  regParamForm,
  regConfigServiceConsumable,
  regConfigServiceGlass
};
