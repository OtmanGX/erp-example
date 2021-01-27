import { FormDialog } from '@tanglass-erp/material';
import { InsertedTransferOrder, Warehouse } from '@tanglass-erp/core/inventory';


const regConfigWarehouse = (data?: Warehouse, companies = [], salespoints = []) => [
  {type: 'input', name: 'name', label: 'Nom', value: data?.name},
  {type: "select", name: "company", label: "Société", inputType: "text", value: data?.company,
    options: companies,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {type: "select", name: "salesPoint", label: "Point de vente",
    inputType: "text", value: data?.salesPoint, options: salespoints,
    validations: [
      FormDialog.REQUIRED
    ]
  },
];



const regConfigTransferOrder = (data?: InsertedTransferOrder) => [
  {type: "select", name: "fromWarehouse", label: "De",
    inputType: "text", value: data?.fromWarehouseid, options: null},
  {type: "select", name: "toWarehouse", label: "À",
    inputType: "text", value: data?.toWarehouseid, options: null},
  {type: "date", name: "deadlineDate", label: "Date limite",
    inputType: "text", value: data?.deadlineDate},
  {type: "input", name: "quantity", label: "Quantité", inputType: "number", value: data?.quantity},
  {type: "input", name: "status", label: "Etat", inputType: "text", value: data?.status},
];

export {
  regConfigWarehouse,
  regConfigTransferOrder,
};
