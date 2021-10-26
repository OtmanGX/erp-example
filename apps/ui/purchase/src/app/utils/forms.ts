import { REQUIRED } from '@tanglass-erp/material';
import { Observable } from 'rxjs';

type ListObservable = Observable<any> | Array<any>;

const regConfigDeliveryInfos = (
  data?,
  providers: any = [],
) => [

  {
    type: 'select',
    name: 'providerid',
    label: 'Fournisseur',
    inputType: 'text',
    value: data?.providerid,
    options: providers,
    validations: [REQUIRED],
  },
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    inputType: 'text',
    value: data?.date ?? new Date(),
  },


];
const regConfigDeliveryItem = (
  data?,
  substances: any = [],
  warehouses: any = []
) => [

  {
    type: 'selectSearch',
    name: 'code',
    label: 'Code',
    inputType: 'text',
    value: data?.code,
    filterFields: ['id', 'label'],
    fieldsToShow: ['id', 'label'],
    options: substances,
  },
  {
    type: 'input',
    name: 'label',
    label: 'Désignation',
    inputType: 'text',
    value: data?.label,
    validations: [REQUIRED,],
  },
  {
    type: 'input',
    name: 'quantity',
    label: 'Quantité',
    inputType: 'number',
    value: data?.quantity,
    validations: [REQUIRED,],
  },
  {
    type: 'input',
    name: 'unit',
    label: 'Unité',
    inputType: 'text',
    value: data?.unit,
    validations: [REQUIRED],
  },
  {
    type: 'input',
    name: 'cost',
    label: 'Cout',
    inputType: 'number',
    value: data?.cost,
    //validations: [REQUIRED, MAXNUMBER(limit)],
  },
  {
    type: 'select',
    name: 'warehouseid',
    label: 'Entrepot',
    inputType: 'text',
    value: data?.warehouseid,
    options: warehouses,
    validations: [REQUIRED],
  },
];

export { regConfigDeliveryInfos, regConfigDeliveryItem };
