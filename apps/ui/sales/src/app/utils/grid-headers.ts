export const glassesColumns: string[] = [
    'product_code',
    'label',
    'count',
    'heigth',
    'width',
    'unit',
    'm2',
    'ml',
    'price',
    'total_price',
    'company_name',
    'action'
];

export const displayedColumns: string[] = [
    'product_code',
    'label',
    'quantity',
    'unit',
    'price',
    'total_price',
    'company_name',
    'action'
];
export const displayedAmountsColumns: string[] = [
    'company',
    'total_HT',
    'total_TVA',
    'total_TTC'
];


export const ProductGlassHeaders = [
    { field: 'id', headerName: 'ID. ' },
    { field: 'product_code', headerName: 'Code' },
    { field: 'label', headerName: 'Désignation' },
    { field: 'count', headerName: 'Count' },
    { field: 'heigth', headerName: 'Hauteur' },
    { field: 'width', headerName: 'Largeur' },
    { field: 'unit', headerName: 'Unité' },
    { field: 'm2', headerName: 'm2' },
    { field: 'ml', headerName: 'ml' },
    { field: 'price', headerName: 'P.U' },
    { field: 'total_price', headerName: 'Total' },
    { field: 'company_name', headerName: 'Société' },

];

export const ProductHeaders = [
    { field: 'id', headerName: 'ID. ' },
    { field: 'product_code', headerName: 'Code' },
    { field: 'label', headerName: 'Désignation' },
    { field: 'quantity', headerName: 'Quantité' },
    { field: 'unit', headerName: 'Unité' },
    { field: 'price', headerName: 'P.U' },
    { field: 'total_price', headerName: 'Total' },
    { field: 'company_name', headerName: 'Société' },

];

export const AmountstHeaders = [

    { field: 'company', headerName: 'Société ' },
    { field: 'total_HT', headerName: 'Total HT' },
    { field: 'total_TVA', headerName: 'Total TVA ' },
    { field: 'total_TTC', headerName: 'Total TTC ' },

]


export const QuotationHeaders = [
    { field: 'id', headerName: 'ID.', type: "linkColumn",
    cellRendererParams: (params) => (
      {
      link: `${params.value}`,
      state: {id: params?.data?.id},
      })
  },
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

