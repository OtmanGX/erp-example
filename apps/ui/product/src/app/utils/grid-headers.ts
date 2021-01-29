
const ProductHeaders = [
  { field: 'product.code', headerName: 'Code', type: "textColumn" },
  { field: 'product.label', headerName: 'Désignation', type: "textColumn" },
  { field: 'product.unit', headerName: 'Unité', type: "numberColumn" },
  { field: 'product.price', headerName: 'Prix', type: "numberColumn" },
  { field: 'product.priceMin', headerName: 'Prix min', type: "numberColumn" },
  { field: 'product.priceMax', headerName: 'Prix max', type: "numberColumn" },
];

const GlassHeaders = [
  {
    headerName: 'Caractéristiques',
    children: [
      {
        field: 'product.code', headerName: 'Code', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/ListVerre/${params.data.id}`,
          })
      },
      { field: 'type', headerName: 'Type', type: "textColumn" },
      { field: 'color', headerName: 'Couleur', type: "textColumn" },
      { field: 'thickness', headerName: 'Epaisseur', type: "numberColumn" },

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
      {
        field: 'product.code', headerName: 'Code', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listConsommables/${params.data.id}`,
          })
      },
      { field: 'category', headerName: 'Catégory' },
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
      {
        field: 'product.code', headerName: 'Code', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listAccessoires/${params.data.id}`,
          })
      },
      { field: 'category', headerName: 'Catégory' },
      { field: 'quota', headerName: 'Quota', type: "numberColumn" },
    ]
  },
  {
    headerName: 'Produit',
    children: ProductHeaders
  }
];

const ServiceHeaders = [
  {
    headerName: 'Produit',
    children: ProductHeaders
  },
  {
    headerName: 'Paramètres',
    children: [
    ]
  }
];


const ServiceGlassHeaders = [
  {
    headerName: '',
    children: [
      {
        field: 'labelFactory', headerName: 'Désignation de fabrication ', type: "linkColumn",
        cellRendererParams: (params) => (
          {
            link: `/listServicesVerres/${params.data.id}`,
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
      { field: 'quota', headerName: 'Quota ', type: "numberColumn" }
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
