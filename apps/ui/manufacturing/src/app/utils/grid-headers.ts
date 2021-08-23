export const JobOrderHeaders = [
  {
    field: 'ref',
    headerName: 'Référence',
    type: 'linkColumn',
    cellRendererParams: (params) => ({
      link: `${params?.data?.id}`,
    }),
  },
  { field: 'date', headerName: 'Date', type: 'dateTimeColumn' },
  { field: 'order_ref ', headerName: 'Réf de Commande', type: 'textColumn' },
  { field: 'type', headerName: 'Type', type: 'textColumn' },
  { field: 'status', headerName: 'Status', type: 'textColumn' },
];
