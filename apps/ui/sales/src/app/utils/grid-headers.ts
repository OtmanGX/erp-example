export const deliveryHeaders = [
  {
    headerName: 'Livraison',
    children: [
      {
        field: 'id',
        headerName: 'ID',
        type: 'linkColumn',
        cellRendererParams: (params) => ({
          link: `update;id=${params?.data?.id}`,
        }),
      },
      { field: 'status', headerName: 'Etat' },
      { field: 'order', headerName: 'N° Commande', type: 'textColumn' },
      {
        field: 'predicted_date',
        headerName: 'Date prévue',
        type: 'dateColumn',
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

export const QuotationHeaders = [
  { field: 'id', headerName: 'ID.', type: 'numberColumn' },
  { field: 'draft_id', headerName: 'Ref', type: 'numberColumn' },
  { field: 'status', headerName: 'Etat', type: 'textColumn' },
  { field: 'customer.name', headerName: 'Client', type: 'textColumn' },
  { field: 'customer.phone', headerName: 'Phone.N°', type: 'textColumn' },
  { field: 'date', headerName: 'Date', type: 'textColumn' },
  { field: 'deadline', headerName: 'Expiration', type: 'textColumn' },
  { field: 'company.name', headerName: 'Société', type: 'textColumn' },
  { field: 'total_ttc', headerName: 'Total TTC', type: 'numberColumn' },
  { field: 'total_tax', headerName: 'Total TVA', type: 'numberColumn' },
  { field: 'total_ht', headerName: 'Total HT', type: 'numberColumn' },
];
