export const deliveryHeaders = [
  { field: 'id', headerName: 'ID' },
  { field: 'status', headerName: 'Etat' },
  { field: 'order', headerName: 'Commande' },
  { field: 'predicted_date', headerName: 'Date prévue', type: 'dateColumn' },
  { field: 'client', headerName: 'Client' },
  { field: 'company', headerName: 'Société' },
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
    { field: 'id', headerName: 'ID.', type: "numberColumn" },
    { field: 'draft_id', headerName: 'Ref', type: "numberColumn" },
    { field: 'status', headerName: 'Etat', type: "textColumn" },
    { field: 'customer.name', headerName: 'Client', type: "textColumn" },
    { field: 'customer.phone', headerName: 'Phone.N°', type: "textColumn" },
    { field: 'date', headerName: 'Date', type: "textColumn" },
    { field: 'deadline', headerName: 'Expiration', type: "textColumn" },
    { field: 'company.name', headerName: 'Société', type: "textColumn" },
    { field: 'total_ttc', headerName: 'Total TTC', type: "numberColumn" },
    { field: 'total_tax', headerName: 'Total TVA', type: "numberColumn" },
    { field: 'total_ht', headerName: 'Total HT', type: "numberColumn" },
  ];

