import { Component } from '@angular/core';
import {Column, ColumnType } from '@tanglass-erp/material';
import { DefaultCellRendererComponent } from '@tanglass-erp/ag-grid';
import { DeliveryStatus } from '@tanglass-erp/core/sales';

export const action=    {
  title: 'Action',
  key: 'action',
  type: ColumnType.template,
  withRow: true,
}



@Component({
  template: `<span [class]='get_class()'>{{value}}</span>`,
})
export class InvoiceStatusComponent extends DefaultCellRendererComponent {
  stat_class = ''

  get_class() {
    if (this.value === DeliveryStatus.INVOICED) return 'text-success';
    return ''
  }
}



export const displayedAmountsColumns: Array<Column> = [
  { key: 'company', title: 'Société' ,type: ColumnType.normal },
  { key: 'total_HT', title: 'Total Hors Taxe' ,type: ColumnType.normal },
  { key: 'total_TVA', title: 'Total TVA' ,type: ColumnType.normal },
  { key: 'total_TTC', title: 'Total TTC' ,type: ColumnType.normal },
  { key: 'received', title: 'Reçu' ,type: ColumnType.normal },
  { key: 'debt', title: 'Reste' ,type: ColumnType.normal },

];

export const ProductGlassHeaders: Array<Column> = [
   // { field: 'id', headerName: 'ID. ' },
    { key: 'product_code', title: 'Code',type: ColumnType.normal},
    { key: 'label', title: 'Désignation',type: ColumnType.normal },
    { key: 'count', title: 'Count',type: ColumnType.normal },
    { key: 'heigth', title: 'Hauteur' ,type: ColumnType.normal},
    { key: 'width', title: 'Largeur',type: ColumnType.normal },
    { key: 'unit', title: 'Unité' ,type: ColumnType.normal},
    { key: 'm2', title: 'm2' ,type: ColumnType.normal},
    { key: 'ml', title: 'ml',type: ColumnType.normal },
    { key: 'price', title: 'P.U',type: ColumnType.normal },
    { key: 'total_price', title: 'Total' ,type: ColumnType.normal},
    { key: 'company_name', title: 'Société' ,type: ColumnType.normal},
     action
];

export const ProductHeaders: Array<Column> = [
     //{ field: 'id', headerName: 'ID. ' },
    { key: 'product_code', title: 'Code' ,type: ColumnType.normal },
    { key: 'label', title: 'Désignation' ,type: ColumnType.normal },
    { key: 'quantity', title: 'Quantité' ,type: ColumnType.normal },
    { key: 'unit', title: 'Unité' ,type: ColumnType.normal },
    { key: 'price', title: 'P.U'  ,type: ColumnType.normal},
    { key: 'total_price', title: 'Total' ,type: ColumnType.normal },
    { key: 'company_name', title: 'Société' ,type: ColumnType.normal },
    action
];



export const QuotationHeaders = [
  {
    field: 'id', headerName: 'Référence', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params?.data?.id}`,
      }
    )
  },
    { field: 'customer.name', headerName: 'Client', type: "textColumn" },
    { field: 'customer.phone', headerName: 'Phone.N°', type: "textColumn" },
    { field: 'date', headerName: 'Date', type: "textColumn" },
    { field: 'deadline', headerName: 'Expiration', type: "textColumn" },
    { field: 'company.name', headerName: 'Société', type: "textColumn" },
    { field: 'total_ttc', headerName: 'Total TTC', type: "numberColumn" },
    { field: 'total_tax', headerName: 'Total TVA', type: "numberColumn" },
    { field: 'total_ht', headerName: 'Total HT', type: "numberColumn" },
    { field: 'draft_id', headerName: 'Ref Brouillon ', type: "numberColumn" },
    { field: 'status', headerName: 'Statut', type: "textColumn" },

  ];

  export const OrderHeaders=[
    {
      field: 'id', headerName: 'Référence', type: "linkColumn",
      cellRendererParams: (params) => (
        {
          link: `${params?.data?.id}`,
        }
      )
    },
      { field: 'customer.name', headerName: 'Client', type: "textColumn" },
      { field: 'customer.phone', headerName: 'Phone.N°', type: "textColumn" },
      { field: 'date', headerName: 'Date', type: "textColumn" },
      { field: 'deadline', headerName: 'Expiration', type: "textColumn" },
      { field: 'company.name', headerName: 'Société', type: "textColumn" },
      { field: 'total_ttc', headerName: 'Total TTC', type: "numberColumn" },
      { field: 'total_tax', headerName: 'Total TVA', type: "numberColumn" },
      { field: 'total_ht', headerName: 'Total HT', type: "numberColumn" },
      { field: 'draft_id', headerName: 'Ref Brouillon ', type: "numberColumn" },
      { field: 'delivery_status', headerName: 'Livraison', type: "textColumn" },
      { field: 'payment_status', headerName: 'paiement', type: "textColumn" },
    ];

export const deliveryHeaders = [
  {
    headerName: 'Livraison',
    children: [
      {
        field: 'id',
        headerName: 'ID',
        type: 'linkColumn',
        cellRendererParams: (params) => ({
          link: ['update', {id : params?.data?.id}],
        }),
      },
      { field: 'status', headerName: 'Etat', cellRendererFramework: InvoiceStatusComponent },
      { field: 'order', headerName: 'N° Commande', type: 'textColumn' },
      {
        field: 'predicted_date',
        headerName: 'Date prévue',
        type: 'dateColumn',
      },
      {
        field: 'amount_ttc',
        headerName: 'Montant TTC',
        type: 'numberColumn',
        valueGetter: (params) => parseFloat(params.value.toFixed(2))
      },
      {
        field: 'isReturned',
        headerName: 'Retourné',
      },
    ],
  },
  {
    headerName: 'Société',
    children: [{ field: 'company.name', headerName: 'Nom' }],
  },
  {
    headerName: 'Client',
    children: [
      { field: 'client.name', headerName: 'Nom', type: 'textColumn' },
      { field: 'client.mail', headerName: 'E-mail', type: 'textColumn' },
    ],
  },
  {
    headerName: 'Contact',
    children: [
      { field: 'contact.name', headerName: 'Nom', type: 'textColumn' },
      { field: 'contact.mail', headerName: 'E-mail', type: 'textColumn' },
      { field: 'contact.phone', headerName: 'Phone', type: 'textColumn' },
    ],
  },
];


export const invoiceHeaders = [
  {
    headerName: 'Facture',
    children: [
      {
        field: 'id',
        headerName: 'ID',
        type: 'linkColumn',
        cellRendererParams: (params) => ({
          link: ['update', {id : params?.data?.id}],
        }),
      },
      {
        field: 'date',
        headerName: 'Date de facture',
        type: 'dateColumn',
      },
      {
        field: 'payment_method',
        headerName: 'Méthode de paiment',
      },
    ],
  },
  {
    headerName: 'Société',
    children: [{ field: 'company.name', headerName: 'Nom' }],
  },
  {
    headerName: 'Client',
    children: [
      { field: 'client.name', headerName: 'Nom', type: 'textColumn' },
      { field: 'client.mail', headerName: 'E-mail', type: 'textColumn' },
    ],
  },
  {
    headerName: 'Contact',
    children: [
      { field: 'contact.name', headerName: 'Nom', type: 'textColumn' },
      { field: 'contact.mail', headerName: 'E-mail', type: 'textColumn' },
      { field: 'contact.phone', headerName: 'Phone', type: 'textColumn' },
    ],
  },
];

export const ProductDraftHeaders = [
  { field: 'id', headerName: 'ID. ' },
  { field: 'product_code', headerName: 'Code' },
  { field: 'label', headerName: 'Désignation' },
  { field: 'count', headerName: 'Count' },
  { field: 'heigth', headerName: 'Hauteur' },
  { field: 'width', headerName: 'Largeur' },
  { field: 'm2', headerName: 'm2' },
  { field: 'ml', headerName: 'ml' },
  { field: 'unit', headerName: 'Unité' },
  { field: 'price', headerName: 'P.U' },
  { field: 'total_price', headerName: 'Total' },
  { field: 'company_name', headerName: 'Société' },
];

