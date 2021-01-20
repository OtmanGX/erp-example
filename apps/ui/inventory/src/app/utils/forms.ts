import { FormDialog } from '@tanglass-erp/material';


const regConfigWarehouse = (data?) => [
  {type: "select", name: "type", label: "Type", inputType: "text", value: data?.type,
    options: ['usine', 'point de vente'].map(e => ({key: e, value: e})),
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "select", name: "company", label: "Société", inputType: "text", value: data?.company,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", name: "salePoint", label: "Point de vente",
    inputType: "text", value: data?.salePoint, options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];


const regConfigGlassWarehouse = (data?) => [
  {type: "input", name: "code", label: "Code", inputType: "text", value: data?.code,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", name: "glass", label: "Verre", inputType: "text", value: data?.glass,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "select", name: "Warehouse", label: "Entrepôt", inputType: "text", value: data?.Warehouse,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];


const regConfigConsumableWarehouse = (data?) => [
  {type: "select", name: "consumable", label: "Consommable", inputType: "text", value: data?.consumable,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", name: "Warehouse", label: "Entrepôt", inputType: "text", value: data?.warehouse,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", name: "quantity", label: "Quantité", inputType: "number", value: data?.quantity,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];

const regConfigAccessoryWarehouse = (data?) => [
  {type: "select", name: "accessory", label: "Accessoire", inputType: "text", value: data?.accessory,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "select", name: "Warehouse", label: "Entrepôt", inputType: "text", value: data?.warehouse,
    options: null,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "input", name: "quantity", label: "Quantité", inputType: "number", value: data?.quantity,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];

const regConfigAccessoryTransferOrder = (data?) => [
  {type: "select", name: "accessory", label: "Accessoire", inputType: "text", value: data?.accessory,
    options: null, multiple: true,
    validations: [
      FormDialog.REQUIRED
    ]},
  {type: "select", name: "fromWarehouse", label: "De",
    inputType: "text", value: data?.fromWarehouse, options: null},
  {type: "select", name: "toWarehouse", label: "À",
    inputType: "text", value: data?.toWarehouse, options: null},
  {type: "input", name: "quantity", label: "Quantité", inputType: "number", value: data?.quantity},
  {type: "input", name: "status", label: "Etat", inputType: "text", value: data?.status},
];



export {
  regConfigAccessoryTransferOrder,
  regConfigAccessoryWarehouse,
  regConfigConsumableWarehouse,
  regConfigGlassWarehouse,
  regConfigWarehouse,
};
