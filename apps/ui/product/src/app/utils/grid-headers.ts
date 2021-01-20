
const ProductHeaders = [
  {
    field: 'code', headerName: 'Code', type: "textColumn"
  },
  { field: 'Catégorie', headerName: 'category'},
  { field: 'label', headerName: 'Désignation', type: "textColumn"},
  { field: 'unit', headerName: 'Unité', type: "numberColumn"},
  { field: 'price', headerName: 'Prix', type: "numberColumn"},
  { field: 'price_min', headerName: 'Prix min', type: "numberColumn"},
  { field: 'price_max', headerName: 'Prix max', type: "numberColumn"},
];

const GlassHeaders = [
  {
    headerName: '',
    children: [
      { field: 'label', headerName: 'Libellé', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/ListVerre/${params.value}`,
            state: { id: params?.data?.id },
          })
      },
      { field: 'type', headerName: 'Code', type: "textColumn"},
      { field: 'color', headerName: 'Couleur', type: "textColumn"},
    ]
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  }
];

const ConsumableHeaders = [
  {
    headerName: '',
    children: [
      { field: 'code', headerName: 'Code', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listConsommables/${params.value}`,
            state: { id: params?.data?.id },
          })
      },
      { field: 'type', headerName: 'Type' },
      { field: 'thickness', headerName: 'épaisseur', type: "textColumn" },
    ]
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  }
];

const AccessoryHeaders = [
  {
    headerName: '',
    children: [
      { field: 'name', headerName: 'Nom', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listAccessoires/${params.value}`,
            state: { id: params?.data?.id },
          })
      },
      { field: 'type', headerName: 'Type'},
      { field: 'quota', headerName: 'Quota', type: "numberColumn"},
    ]
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  }
];

const ServiceHeaders = [
  { field: 'name', headerName: 'Nom', type: "textColumn" },
  { field: 'params', headerName: 'Paramètres', type: "textColumn"},
];


const ServiceGlassHeaders = [
  {
    headerName: '',
    children: [
      {field: 'labelFactory', headerName: 'Désignation de fabrication ', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listServicesVerres/${params.value}`,
            state: { id: params?.data?.id },
          })
      },
    ]
  },
  {
    headerName: 'Service',
    children: ServiceHeaders
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  },
];

const ServiceConsumableHeaders = [
  {
    headerName: '',
    children: [
      {field: 'quota', headerName: 'Quota ', type: "numberColumn"}
    ]
  },
  {
    headerName: 'Service',
    children: ServiceHeaders
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  },
];

export {
  ServiceHeaders,
  ProductHeaders,
  GlassHeaders,
  AccessoryHeaders,
  ConsumableHeaders,
  ServiceConsumableHeaders,
  ServiceGlassHeaders
};
