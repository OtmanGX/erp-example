import { Column, ColumnType } from '@tanglass-erp/material';


export const PurchaseHeaders = [
  { field: 'ref', headerName: 'Réference', type: "textColumn" },
  { field: 'date', headerName: 'Date', type: "textColumn" },
  { field: 'status', headerName: 'Etat', type: "textColumn" },
  { field: 'localisation', headerName: 'Emplacement', type: "textColumn" },
  { field: 'company', headerName: 'Société', type: "textColumn" },

];


export const DeliveredItemsHeaders = [
  { field: 'code', headerName: 'Code', type: "textColumn" },
  { field: 'label', headerName: 'Désignation', type: "textColumn" },
  { field: 'status', headerName: 'Etat', type: "textColumn" },
  { field: 'company', headerName: 'Société', type: "textColumn" },
];


export const SubstanceHeaders: Array<Column> = [
  { key: 'code', title: 'Code', type: ColumnType.normal },
  { key: 'label', title: 'Désignation', type: ColumnType.normal },
  { key: 'quantity', title: 'Quantité', type: ColumnType.normal },
  { key: 'unit', title: 'Unité', type: ColumnType.normal },
  { key: 'cost', title: 'Cout', type: ColumnType.normal },
  //{ key: 'warehouse', title: 'Entrepot', type: ColumnType.normal },
];
