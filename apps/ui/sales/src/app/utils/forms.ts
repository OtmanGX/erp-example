import { MAXNUMBER, REQUIRED } from '@tanglass-erp/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Glass, Accessory, Service, Consumable, CustomerProduct } from "@TanglassStore/product/index";
import { Intermediate_Data, DraftItem } from "./models";
import {
  DeliveryStatus,
  InsertedDeliveryForm, InsertedInvoice,
  PaymentMethod,
} from '@tanglass-erp/core/sales';

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

const regConfigInvoice = (data?: InsertedInvoice | null, deliveries?: any, clients?, companies?, contacts?) => [
  {
    type: "selectSearch",
    name: "deliveries",
    label: "N° des livraisons",
    inputType: "text",
    value: data?.deliveries?.map(value => value.delivery_id),
    filterFields: ['id', 'company.name'],
    fieldsToShow: ['id', 'company.name'],
    multiple: true,
    disabled: data?.id != null,
    options: deliveries,
    validations: [REQUIRED]
  },
  {
    type: "date",
    name: "date",
    label: "Date de facture",
    value: data?.date || new Date(),
    inputType: "text",
    validations: [REQUIRED]
  },
  {
    type: "select",
    name: "company",
    label: "Société",
    inputType: "text",
    options: companies,
    value: data?.company,
    validations: [REQUIRED]
  },
  {
    type: "selectSearch",
    name: "client",
    label: "Client",
    filterFields: ['name', 'phone'],
    fieldsToShow: ['name', 'phone'],
    inputType: "text",
    options: clients,
    value: data?.client,
    validations: [REQUIRED]
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
    value: data?.payment_method,
    validations: [REQUIRED]
  }
  ];


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
    value: data?.isReturned ?? false,
    inputType: "text",
  },
  {
    type: "date",
    name: "predicted_date",
    label: "Date prévue",
    value: data?.predicted_date || new Date(),
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
    options: Object.values(PaymentMethod).map(e => ({ key: e, value: e })),
    value: data?.payment_method
  },
  {
    type: "select",
    name: "status",
    label: "Etat",
    inputType: "text",
    // disabled: true,
    value: data?.status,
    options: Object.values(DeliveryStatus).map(e => ({ key: e, value: e }))
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
      name: "customer_id",
      label: "Clients",
      inputType: "text",
      value: data?.customer_id ,
      filterFields: ['name', 'phone'],
      fieldsToShow: ['name', 'phone'],
      options: customers
    },
    {
      type: "selectSearch", name: "contact_id",
      label: "Contacts", inputType: "text", value: data?.contact_id ,
      filterFields: ['name', 'code'],
      fieldsToShow: ['name', 'code'],
      options: contacts
    },
    {
      type: 'select',
      name: 'company_id',
      label: 'Société',
      inputType: 'text',
      value: data?.company_id,
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
    {
      type: 'date',
      name: 'deadline',
      label: 'Délai',
      inputType: 'text',
      value: data?.deadline
      ,
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
      //validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "select", name: "company_id", label: "Société",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      //validations: [REQUIRED],
    },
    {
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.data?.warehouse_id ,
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
        map(item => item.map(product => ({ id: product.product.code, label: product.product.label })))),

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
      options: ((data.row.ml || data.row.m2) ? getGlassQuantities(data.row) : null) ,
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
      type: "select", name: "warehouse_id", label: "Stock",
      inputType: "text", value: data?.data?.warehouse_id ,
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


const regConfigPayment = (
  data,
  customers,
  companies,
  limit?: number
) => [

    {
      type: "select", name: "company_id", label: "En faveur de",
      inputType: "text", value: data?.data?.company_name,
      options: companies,
      validations: [REQUIRED],
    },
    {
      type: "select",
      name: "payment_method",
      label: "Méthode de paiement",
      inputType: "text",
      options: Object.values(PaymentMethod).map(e => ({ key: e, value: e })),
      value: data?.payment_method
    },
    {
      type: 'input',
      name: 'comment',
      label: 'Libellé',
      inputType: 'text',
      value: data?.data?.label,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'amount',
      label: 'Montant',
      inputType: 'number',
      value: data?.data?.amount,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: 'input',
      name: 'paper_ref',
      label: 'Référence',
      inputType: 'text',
      value: data?.data?.paper_ref,
      validations: [REQUIRED, MAXNUMBER(limit)],
    },
    {
      type: "selectSearch",
      name: "customer_id",
      label: "Client",
      inputType: "text",
      value: data?.customers ,
      filterFields: ['name', 'phone'],
      fieldsToShow: ['name', 'phone'],
      options: customers
    },
    {
      type: "date",
      name: "date",
      label: "Date ",
      value: data?.date,
      inputType: "text",
    },
    {
      type: "date",
      name: "deadline",
      label: "Date d'échéance ",
      value: data?.expected_date,
      inputType: "text",
    },

  ];
export {
  regConfigDraftInfos,
  regConfigGlassItem,
  regConfigAccessoireItem,
  regConfigServiceItem,
  regConfigConsumableItem,
  regConfigCustomerItem,
  regConfigDelivery,
  regConfigInvoice,
  regConfigPayment,
};
