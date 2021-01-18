import { FormDialog } from '@tanglass-erp/material';

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
  {type: "input", label: "Prix min", inputType: "number", name: "price_min",
    value: data?.product?.price_min,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", label: "Prix max", inputType: "number", name: "price_max",
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
      {type: "input", label: "Nom", inputType: "text", name: "name", value: data?.name},
      {type: "input", label: "Quota", inputType: "number", name: "quota", value: data?.quota},
      {type: "inputSelect", label: "Type", inputType: "text", name: "type", value: data?.type,
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
        type: "input", label: "Type", inputType: "text", name: "type", value: data?.type,
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


const regConfigGlass = (data?, listCompanies = []) => [
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


const regConfigService = (data?) => [
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
      {type: "input", label: "Unité de prix par défaut", inputType: "text", name: "defaultPriceUnit",
        value: data?.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
    ]
  },
  {
    name: "params",
    label: "Params",
    headerVisible: false,
    fields: [
      {type: "inputTag", label: "Paramètres", name: "params", value: data?.params ?? [],
        options: []}
    ]
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
  regConfigService,
  regConfigServiceConsumable,
  regConfigServiceGlass
};
