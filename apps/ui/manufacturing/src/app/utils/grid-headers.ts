export const JobOrderHeaders = [
  {
    field: 'ref',
    headerName: 'Référence',
    type: 'linkColumn',
    cellRendererParams: (params) => ({
      link: `${params.value}`,
      state: { id: params?.data?.ref },
    }),
  },
  { field: 'date', headerName: 'Date', type: 'textColumn' },
  { field: 'order_ref ', headerName: 'Réf de Commande', type: 'textColumn' },
  { field: 'type', headerName: 'Type', type: 'textColumn' },
  { field: 'status', headerName: 'Status', type: 'textColumn' },
];
