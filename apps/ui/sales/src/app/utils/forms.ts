import { MAXNUMBER, REQUIRED } from '@tanglass-erp/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Glass, Accessory, Service, Consumable,CustomerProduct } from "@TanglassStore/product/index";
import { Intermediate_Data, DraftItem } from "./models";
import { DeliveryStatus, InsertedDeliveryForm, PaymentMethod } from '@tanglass-erp/core/sales';

type ListObservable = Observable<any> | Array<any>;


function getGlassQuantities(row: DraftItem) {
  return [
    { key: row.m2, value: row.m2 + '  m2' },
    { key: row.ml, value: row.ml + '  ml' }
  ]
}

export type deliveryFormType = {
  order: number;
  predicted_date: Date;
  status: DeliveryStatus;
  isReturned: boolean;
  company: string;
  client: string;
  contact: string;
  payment_method: PaymentMethod;
}

const regConfigDelivery = (data?: InsertedDeliveryForm | null, orders?, clients?, companies?, contacts?) => [
  {
    type: "selectSearch",
    name: "order",
    label: "N° Commande",
    inputType: "text",
    value: data?.order,
    filterFields: ['id', 'company.name'],
    fieldsToShow: ['id', 'company.name'],
    disabled: data !== null,
    options: orders,
    validations: [REQUIRED]
  },
  {
    type: "checkbox",
    name: "isReturned",
    label: "Retourné ?",
    value: data?.isReturned,
    inputType: "text",
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
  glasses: Observable<Glass[]>,
  companies: any = [],
  warehouses: any = [],
  data?: Intermediate_Data,
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data.data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: glasses.pipe(
        map(item => item.map(glass => ({ id: glass.product.code, label: glass.product.label })))),

    },

    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'width',
      label: 'Largeur',
      inputType: 'number',
      value: data?.data?.width,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'heigth',
      label: 'Hauteur',
      inputType: 'number',
      value: data?.data?.heigth,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'count',
      label: 'N° de piéces',
      inputType: 'number',
      value: data?.data?.count,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.data?.warehouse_id ?? [],
      options: warehouses,
      validations: [REQUIRED],
    },
    {
      type: 'input',
      name: 'unit',
      label: 'Unité',
      inputType: 'text',
      value: data?.data?.unit,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
  ];


  const regConfigCustomerItem = (
    customerProducts: Observable<CustomerProduct[]>,
    data?: Intermediate_Data,
    limit?: number
  ) => [
      {
        type: "selectSearch",
        name: "product_code",
        label: "Code",
        inputType: "text",
        value: data.data?.product_code,
        filterFields: ['id', 'label'],
        fieldsToShow: ['id', 'label'],
        options: customerProducts.pipe(
          map(item => item.map(product => ({ id: product.code, label: product.label })))),

      },
      {
        type: 'input',
        name: 'label',
        label: 'Désignation',
        inputType: 'text',
        value: data?.data?.label,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },
      {
        type: 'input',
        name: 'width',
        label: 'Largeur',
        inputType: 'number',
        value: data?.data?.width,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },
      {
        type: 'input',
        name: 'heigth',
        label: 'Hauteur',
        inputType: 'number',
        value: data?.data?.heigth,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },
      {
        type: 'input',
        name: 'count',
        label: 'N° de piéces',
        inputType: 'number',
        value: data?.data?.count,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },

      {
        type: 'input',
        name: 'unit',
        label: 'Unité',
        inputType: 'text',
        value: data?.data?.unit,
        validations: [REQUIRED, MAXNUMBER(limit)],
      },
    ];


const regConfigAccessoireItem = (
  accessories: Observable<Accessory[]>,
  companies: any = [],
  warehouses: any = [],
  data?: Intermediate_Data,
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: accessories.pipe(
        map(item => item.map(accessory => ({ id: accessory.product.code, label: accessory.product.label })))),
    },

    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'quantity',
      label: 'Quantité',
      inputType: 'number',
      value: data?.data?.quantity,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.data?.warehouse_id,
      options: warehouses,
      validations: [REQUIRED],
    },
    {
      type: 'input',
      name: 'unit',
      label: 'Unité',
      inputType: 'text',
      value: data?.data?.unit,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
  ];
const regConfigServiceItem = (
  services: Observable<Service[]>,
  companies: any = [],
  data?: Intermediate_Data,
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: services.pipe(
        map(item => item.map(service => ({ id: service.product.code, label: service.product.label })))),
    },
    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },

    {
      type: 'inputSelect',
      name: 'quantity',
      label: 'Quantité',
      inputType: 'number',
      value: data?.data?.quantity,
      options: getGlassQuantities(data.row) ?? [],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: 'input',
      name: 'unit',
      label: 'Unité',
      inputType: 'text',
      value: data?.data?.unit,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
  ];

const regConfigConsumableItem = (
  consumbales: Observable<Consumable[]>,
  companies: any = [],
  warehouses: any = [],
  data?: Intermediate_Data,
  limit?: number
) => [
    {
      type: "selectSearch",
      name: "product_code",
      label: "Code",
      inputType: "text",
      value: data?.data?.product_code,
      filterFields: ['id', 'label'],
      fieldsToShow: ['id', 'label'],
      options: consumbales.pipe(map(item => item.map(consumable =>
        ({ id: consumable.product.code, label: consumable.product.label })))),
    },
    {
      type: 'input',
      name: 'label',
      label: 'Désignation',
      inputType: 'text',
      value: data?.data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },

    {
      type: 'inputSelect',
      name: 'quantity',
      label: 'Quantité',
      inputType: 'number',
      value: data?.data?.quantity,
      options: ((data.row.ml || data.row.m2) ? getGlassQuantities(data.row) : null) ?? [],
    },
    {
      type: 'input',
      name: 'price',
      label: 'P.U',
      inputType: 'number',
      value: data?.data?.price,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.data?.warehouse_id ?? [],
      options: warehouses,
      //validations: [REQUIRED],
    },
    {
      type: 'input',
      name: 'unit',
      label: 'Unité',
      inputType: 'text',
      value: data?.data?.unit,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },

  ];
export {
  regConfigDraftInfos,
  regConfigGlassItem,
  regConfigAccessoireItem,
  regConfigServiceItem,
  regConfigConsumableItem,
  regConfigCustomerItem,
  regConfigDelivery
};
