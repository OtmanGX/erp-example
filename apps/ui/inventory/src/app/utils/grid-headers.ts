const warehouseHeaders = [
  { field: 'name', headerName: 'Nom', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `/warehouses/${params.data.id}`,
      }
  )},
  { field: 'company.name', headerName: 'Société', type: "textColumn"},
  { field: 'salesPoint.name', headerName: 'Point de vente', type: "textColumn"},
];

const warehouseTransferHeaders = [
  { field: 'id', headerName: 'Référence', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `/warehouses/transfert/${params.data.id}`,
      }
  )},
  { field: 'fromwarehouse.name', headerName: 'Entropot source', type: "textColumn"},
  { field: 'towarehouse.name', headerName: 'Entropot destination', type: "textColumn"},
  { field: 'status', headerName: 'Statut', type: "textColumn"},
  { field: 'date', headerName: 'Date', type: "textColumn"},
  { field: 'deadline', headerName: 'Date limite', type: "textColumn"},
];

const ProductHeaders = [
  { field: 'label', headerName: 'Désignation', type: "textColumn"},
  { field: 'price', headerName: 'Prix', type: 'numberColumn'},
  { field: 'unit', headerName: 'Unité'},
];

const GlassHeaders = [
  { field: 'type', headerName: 'Code', type: "textColumn"},
  { field: 'color', headerName: 'Couleur', type: "textColumn"},
  { field: 'thickness', headerName: 'épaisseur', type: "textColumn"},
];

const SubstanceGlassHeaders = [
  {
    headerName: 'Produit',
    children:
      ProductHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'substance.productGlass' + elem.field))
  },
  {
    headerName: 'Verre',
    children:
      GlassHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'substance.glass.' + elem.field) && elem)
  }
];

const SubstanceAccessoryHeaders = [
  {
    headerName: 'Produit',
    children:
      ProductHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'substance.productAccessory' + elem.field))
  },
  {
    headerName: 'Accessoire',
    children: [
      { field: 'accessory.category', headerName: 'Catégorie'},
    ]
  }
];

const SubstanceConsumableHeaders = [
  {
    headerName: 'Produit',
    children:
      ProductHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'substance.productConsumable' + elem.field))
  },
  {
    headerName: 'Consommable',
    children: [
      { field: 'consomable.category', headerName: 'Catégorie'},
    ]
  }
];


const GlassWarehouseHeaders = [
  {headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },
  {
    headerName: 'Substance',
    children: SubstanceGlassHeaders
  },
  {field: 'quantity', headerName: 'Quantité'}
];

const ConsumableWarehouseHeaders = [
  {headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },
  {headerName: 'Substance', children:
    SubstanceConsumableHeaders
  },
  {field: 'quantity', headerName: 'Quantité'}
];

const AccessoryWarehouseHeaders = [
  {headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({...elem})).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },
  {headerName: 'Substance', children:
    SubstanceConsumableHeaders
  },
  {field: 'quantity', headerName: 'Quantité'}
];


export {
  warehouseHeaders,
  warehouseTransferHeaders,
  GlassHeaders,
  GlassWarehouseHeaders,
  ConsumableWarehouseHeaders,
  AccessoryWarehouseHeaders,
};
