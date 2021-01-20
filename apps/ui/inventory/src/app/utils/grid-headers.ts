const WarehouseHeaders = [
  { field: 'type', headerName: 'Type'},
  { field: 'company', headerName: 'Société', type: "textColumn"},
  { field: 'salePoint', headerName: 'Point de vente', type: "textColumn"},
];

const GlassHeaders = [
  { field: 'type', headerName: 'Code', type: "textColumn"},
  { field: 'color', headerName: 'Couleur', type: "textColumn"},
  { field: 'label', headerName: 'Libellé', type: "textColumn"},
];

const ConsumableHeaders = [
  { field: 'code', headerName: 'Code', type: "textColumn"},
  { field: 'type', headerName: 'Type'},
  { field: 'thickness', headerName: 'épaisseur', type: "textColumn"},
];

const AccessoryHeaders = [
  { field: 'name', headerName: 'Nom', type: "textColumn"},
  { field: 'type', headerName: 'Type'},
  { field: 'quota', headerName: 'épaisseur', type: "numberColumn"},
];



const GlassWarehouseHeaders = [
  {headerName: '', children: [
      { field: 'code', headerName: 'Code'},
    ]
  },
  {headerName: 'Verre', children: GlassHeaders},
  {headerName: 'Entrepôt', children: WarehouseHeaders},
];

const ConsumableWarehouseHeaders = [
  {headerName: 'Consommable', children: ConsumableHeaders},
  {headerName: 'Entrepôt', children: WarehouseHeaders},
  {headerName: '', children: [
      { field: 'quantity', headerName: 'Quantité', type: 'numberColumn'},
    ]
  },
];

const AccessoryWarehouseHeaders = [
  {headerName: 'Accessoire', children: AccessoryHeaders},
  {headerName: 'Entrepôt', children: WarehouseHeaders},
  {headerName: '', children: [
      { field: 'quantity', headerName: 'Quantité', type: 'numberColumn'},
    ]
  },
];


export {
  WarehouseHeaders,
  GlassHeaders,
  ConsumableHeaders,
  AccessoryHeaders,
  GlassWarehouseHeaders,
  ConsumableWarehouseHeaders,
  AccessoryWarehouseHeaders
};
