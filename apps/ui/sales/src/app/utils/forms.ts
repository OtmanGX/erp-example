import { MAXNUMBER, REQUIRED } from '@tanglass-erp/material';
import { Observable } from 'rxjs';
import { DeliveryStatus, InsertedDeliveryForm, PaymentMethod } from '@tanglass-erp/core/sales';

type ListObservable = Observable<any> | Array<any>;


export type deliveryFormType = {
  orders: number[];
  predicted_date: Date;
  status: DeliveryStatus;
  company: string;
  client: string;
  contact: string;
  payment_method: PaymentMethod;
}

const regConfigDelivery = (data?: InsertedDeliveryForm | null, orders?, clients?, companies?, contacts?) => [
  {
    type: "selectSearch",
    name: "orders",
    label: "N° Commande",
    inputType: "text",
    multiple: true,
    value: data?.orders ?? [],
    filterFields: ['id', 'company.name'],
    fieldsToShow: ['id', 'company.name'],
    disabled: data !== null,
    options: orders,
    validations: [REQUIRED]
  },
  {
    type: "date",
    name: "predicted_date",
    label: "Date prévue",
    value: data?.predicted_date,
    inputType: "text",
  },
  {
    type: "select",
    name: "company",
    label: "Société",
    inputType: "text",
    options: companies,
    value: data?.company
  },
  {
    type: "selectSearch",
    name: "client",
    label: "Client",
    filterFields: ['name', 'phone'],
    fieldsToShow: ['name', 'phone'],
    inputType: "text",
    options: clients,
    value: data?.client
  },
  {
    type: "selectSearch",
    name: "contact",
    label: "Contact",
    filterFields: ['name', 'code'],
    fieldsToShow: ['name', 'code'],
    inputType: "text",
    options: contacts,
    value: data?.contact
  },
  {
    type: "select",
    name: "payment_method",
    label: "Méthode de paiement",
    inputType: "text",
    options: Object.values(PaymentMethod).map(e => ({key: e, value: e})),
    value: data?.payment_method
  },
  {
    type: "select",
    name: "status",
    label: "Etat",
    inputType: "text",
    value: data?.status,
    options: Object.values(DeliveryStatus).map(e => ({key: e, value: e}))
  },
  ];

const regConfigDraftInfos = (
  data?,
  customers: any = [],
  contacts: any = [],
  companies: any = [],
) => [

    {
      type: "selectSearch",
      name: "customers",
      label: "Clients",
      inputType: "text",
      value: data?.customers ?? [],
      filterFields: ['name', 'phone'],
      fieldsToShow: ['name', 'phone'],
      options: customers
    },
    {
      type: "selectSearch", name: "contacts",
      label: "Contacts", inputType: "text", value: data?.contacts ?? [],
      filterFields: ['name', 'code'],
      fieldsToShow: ['name', 'code'],
      options: contacts
    },
    {
      type: 'select',
      name: 'company',
      label: 'Société',
      inputType: 'text',
      value: data?.company,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: 'date',
      name: 'date',
      label: 'Date',
      inputType: 'text',
      value: data?.date,
    },
  ];

const regConfigGlassItem = (
  data?,
  glasses: any = [],
  companies: any = [],
  warehouses: any = [],
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: glasses,

    },

    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'width',
      label: 'Largeur',
      inputType: 'number',
      value: data?.width,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'heigth',
      label: 'Hauteur',
      inputType: 'number',
      value: data?.heigth,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'count',
      label: 'N° de piéces',
      inputType: 'number',
      value: data?.count,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.company_id ,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.warehouse ?? [],
      options: warehouses,
      validations: [REQUIRED],
    },
  ];
const regConfigAccessoireItem = (
  data?,
  accessories: any = [],
  companies: any = [],
  warehouses: any = [],
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: accessories,
    },

    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'quantity',
      label: 'Quantité',
      inputType: 'number',
      value: data?.quantity,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.company_id ,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.warehouse_id ,
      options: warehouses,
      validations: [REQUIRED],
    },
  ];
const regConfigServiceItem = (
  data?,
  services: any = [],
  companies: any = [],
  warehouses: any = [],
  quantities:any=[],
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: services,
    },
    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },

    {
      type: 'inputSelect',
      name: 'quantity',
      label: 'Quantité',
      inputType: 'number',
      value: data?.quantity,
      options:quantities ?? [],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.company_id ?? [],
      options: companies,
      validations: [REQUIRED],
    },


  ];

  const regConfigConsumableItem = (
    data?,
    services: any = [],
    companies: any = [],
    warehouses: any = [],
    quantities:any=[],
    limit?: number
  ) => [
      {
        type: "selectSearch",
        name: "product_code",
        label: "Code",
        inputType: "text",
        value: data?.product_code,
        filterFields: ['id', 'label'],
        fieldsToShow: ['id', 'label'],
        options: services,
      },
      {
        type: 'input',
        name: 'label',
        label: 'Désignation',
        inputType: 'text',
        value: data?.label,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },

      {
        type: 'inputSelect',
        name: 'quantity',
        label: 'Quantité',
        inputType: 'number',
        value: data?.quantity,
        options:quantities ?? [],
      },
      {
        type: 'input',
        name: 'price',
        label: 'P.U',
        inputType: 'number',
        value: data?.price,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },
      {
        type: "select", name: "company_id", label: "Société",
        inputType: "text", value: data?.company_id ?? [],
        options: companies,
        validations: [REQUIRED],
      },
      {
        type: "select", name: "warehouse_id", label: "Stock",
        inputType: "text", value: data?.warehouse_id ?? [],
        options: warehouses,
        //validations: [REQUIRED],
      },

    ];
export {
  regConfigDraftInfos,
  regConfigGlassItem,
  regConfigAccessoireItem,
  regConfigServiceItem,
  regConfigDelivery
};
