import { FormDialog } from '@tanglass-erp/material';
import {
  DetailedTransferOrder,
  transferStatusDirection,
  Warehouse,

} from '@tanglass-erp/store/inventory';
import { Observable } from 'rxjs';
import { Validators } from '@angular/forms';

type ListObservable = Observable<any> | Array<any>;


const regConfigWarehouse = (data?: Warehouse, companies: ListObservable = [], salespoints: ListObservable = []) => [
  { type: 'input', name: 'name', label: 'Nom', value: data?.name },
  {
    type: "select", name: "company", label: "Société", inputType: "text", value: data?.company?.id,
    options: companies,
    validations: [
      FormDialog.REQUIRED
    ]
  },
  {
    type: "select", name: "salesPoint", label: "Point de vente",
    inputType: "text", value: data?.salesPoint?.id, options: salespoints,
    validations: [
      FormDialog.REQUIRED
    ]
  }
];



const regConfigTransferOrder = (data?: DetailedTransferOrder, warehouses: any = []) => [
  {
    type: "select", name: "fromWarehouse", label: "De",
    inputType: "text", value: data?.fromwarehouse?.id, options: warehouses, validations: [FormDialog.REQUIRED]
  },
  {
    type: "select", name: "toWarehouse", label: "À",
    inputType: "text", value: data?.towarehouse?.id, options: warehouses, validations: [FormDialog.REQUIRED]
  },
  {
    type: "date", name: "date", label: "Date",
    inputType: "text", value: data?.date
  },
  {
    type: "date", name: "deadline", label: "Date limite",
    inputType: "text", value: data?.deadline
  },
];

const regConfigTransferOrderEdit = (data?: DetailedTransferOrder, warehouses: any = []) => [
    ...regConfigTransferOrder(data, warehouses),
    {type: "inputSelect", name: "status", label: "Etat", inputType: "text", value: data?.status,
      options: Object.values(transferStatusDirection).map(elem => ({key: elem, value: elem}))},
];

const regConfigTransferOrderItem = (data?, substances: any = [], limit?: number) => [
  {
    type: "radiobutton", name: "typeSubstance", label: "",
    inputType: "number", value: 'Verre', options: ['Accessoire', 'Verre']
  },
  {type: "selectSearch", name: "substance", label: "Substance",
    inputType: "text", value: data?.substance ?? [],
    filterFields: ['product.label'],
    fieldsToShow: ['product.label'],
    options: substances,
    validations: [FormDialog.REQUIRED]},
  {
    type: "input", name: "quantity", label: "Quantité",
    inputType: "number", value: data?.quantity,
    validations: [
      FormDialog.REQUIRED,
      {
        name: "max",
        validator: Validators.max(limit),
        message: "Max dépassé "
    }]
  },
];


const regConfigTransferOrderItemCard = (data: any, limit?: number) => [
  { type: "select", name: "substance", label: "Substance", value: data.substance?.code,
  disabled: true, options: [{key: data.substance?.code, value: data.substance?.label}]},
  { type: "inputSelect", name: "status", label: "État", value: data.status,
  options: Object.values(transferStatusDirection).map(elem => ({key: elem, value: elem}))},
  {
    type: "input", name: "quantity", label: "Quantité",
    inputType: "number", value: data?.quantity,
    validations: [
      FormDialog.REQUIRED,
      {
      name: "max",
      validator: Validators.max(limit),
      message: "Max dépassé "
      }
    ]
  },
];

const regConfigDelivery = (limit?: number) => [
  { type: "input", inputType: "number", label: "Quantité", name: "quantity", value: null, validations: [
      FormDialog.REQUIRED,
      {
        name: "max",
        validator: Validators.max(limit),
        message: "Max dépassé "
      }
    ] },
  { type: "date", label: "Date", name: "date", value: null },
  { type: "inputSelect", name: "status", label: "État", value: null,
    options: ['Ready', 'out'].map(item => ({key: item, value: item}))}
  ];

export {
  regConfigWarehouse,
  regConfigTransferOrder,
  regConfigTransferOrderItem,
  regConfigTransferOrderEdit,
  regConfigTransferOrderItemCard,
  regConfigDelivery
};
