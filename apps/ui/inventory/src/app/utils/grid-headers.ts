const warehouseHeaders = [
  { field: 'name', headerName: 'Nom'},
  { field: 'company.name', headerName: 'Société', type: "textColumn"},
  { field: 'salesPoint.name', headerName: 'Point de vente', type: "textColumn"},
];

const ProductHeaders = [
  { field: 'label', headerName: 'Déssignation', type: "textColumn"},
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
  GlassHeaders,
  GlassWarehouseHeaders,
  ConsumableWarehouseHeaders,
  AccessoryWarehouseHeaders,
};
