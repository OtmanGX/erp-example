import { REQUIRED } from '@tanglass-erp/material';

import { FormDialog } from '@tanglass-erp/material';
import { Observable } from 'rxjs';

type ListObservable = Observable<any> | Array<any>;

const regConfigDeliveryInfos = (
  data?,
  providers: any = [],
  warehouses: any = []
) => [
  {
    type: 'selectSearch',
    name: 'providerid',
    label: 'Fournisseurs',
    inputType: 'text',
    value: data?.providerid,
    filterFields: ['name', 'phone'],
    fieldsToShow: ['name', 'phone'],
    options: providers,
  },
  {
    type: 'date',
    name: 'date',
    label: 'Date',
    inputType: 'text',
    value: data?.date,
  },
  {
    type: 'selectSearch',
    name: 'warehouseid',
    label: 'Entrepot',
    inputType: 'text',
    value: data?.warehouseid,
    options: warehouses,
  },
];

export { regConfigDeliveryInfos };
