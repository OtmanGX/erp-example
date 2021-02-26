import { REQUIRED } from '@tanglass-erp/material';

import { FormDialog } from '@tanglass-erp/material';
import { Observable } from 'rxjs';


type ListObservable = Observable<any> | Array<any>;

const regConfigDelivery = (data?, providers: ListObservable = [], warehouses: ListObservable = []) => [
    {
      type: "select", name: "provider", label: "Fournisseur",
      inputType: "text", value: data?.fromwarehouse?.id, options: providers, validations: [REQUIRED]
    },
    {
      type: "select", name: "Warehouse", label: "Emplacement",
      inputType: "text", value: data?.towarehouse?.id, options: warehouses, validations: [REQUIRED]
    },
    {
      type: "date", name: "date", label: "Date",
      inputType: "text", value: data?.date
    },
  ];

const regConfigDeliveryItem = (data?, substances: ListObservable = []) => [

    {type: "select", name: "substance", label: "Substance",
      inputType: "text", value: data?.substance ?? [],
      options: substances},
    {
      type: "input", name: "quantity", label: "Quantité",
      inputType: "number", value: data?.quantity
    },
  ];


  export {
    regConfigDelivery,
    regConfigDeliveryItem
  };
