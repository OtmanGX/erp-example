
import { FormDialog } from '@tanglass-erp/material';

const regConfigDelivery = (data?, warehouses: any = []) => [
    {
      type: "select", name: "provider", label: "Fournisseur",
      inputType: "text", value: data?.fromwarehouse?.id, options: warehouses, validations: [FormDialog.REQUIRED]
    },
    {
      type: "select", name: "Warehouse", label: "Emplacement",
      inputType: "text", value: data?.towarehouse?.id, options: warehouses, validations: [FormDialog.REQUIRED]
    },
    {
      type: "date", name: "date", label: "Date",
      inputType: "text", value: data?.date
    },
  
  ];

const regConfigDeliveryItem = (data?, substances: any = []) => [

    {type: "selectSearch", name: "substance", label: "Substance",
      inputType: "text", value: data?.substance ?? [],
      filterFields: ['product.label'],
      fieldsToShow: ['product.label'],
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
  