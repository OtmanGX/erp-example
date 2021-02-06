import { FormDialog } from '@tanglass-erp/material';
import {
  InsertedTransferOrder,
  transferStatusDirection,
  Warehouse
} from '@tanglass-erp/store/inventory';



const regConfigWarehouse = (data?: Warehouse, companies = [], salespoints = []) => [
  { type: 'input', name: 'name', label: 'Nom', value: data?.name },
  {
    type: "select", name: "company", label: "Société", inputType: "text", value: data?.company,
    options: companies,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {
    type: "select", name: "salesPoint", label: "Point de vente",
    inputType: "text", value: data?.salesPoint, options: salespoints,
    validations: [
      FormDialog.REQUIRED
    ]
  }
];



const regConfigTransferOrder = (data?: InsertedTransferOrder, warehouses: any = []) => [
  {
    type: "select", name: "fromWarehouse", label: "De",
    inputType: "text", value: data?.fromWarehouseid, options: warehouses, validations: [FormDialog.REQUIRED]
  },
  {
    type: "select", name: "toWarehouse", label: "À",
    inputType: "text", value: data?.toWarehouseid, options: warehouses, validations: [FormDialog.REQUIRED]
  },
  // {type: "inputSelect", name: "status", label: "Etat", inputType: "text", value: data?.status,options: Object.values(transferStatusDirection).map(elem => ({key: elem, value: elem}))},
  {
    type: "date", name: "date", label: "Date",
    inputType: "text", value: data?.date
  },
  {
    type: "date", name: "deadline", label: "Date limite",
    inputType: "text", value: data?.deadline
  },

];

const regConfigTransferOrderItem = (data?) => [
  {
    type: "radiobutton", name: "typeSubstance", label: "",
    inputType: "number", value: 'Verre', options: ['Accessoire', 'Verre']
  },
  {
    type: "selectSearch", name: "substance", label: "Substance",
    inputType: "text", value: data?.substance, options: []
  },
  {
    type: "input", name: "quantity", label: "Quantité",
    inputType: "number", value: data?.quantity, validations: [FormDialog.REQUIRED]
  },
];

export {
  regConfigWarehouse,
  regConfigTransferOrder,
  regConfigTransferOrderItem
};
