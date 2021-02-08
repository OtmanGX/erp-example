const warehouseHeaders = [
  {
    field: 'name', headerName: 'Nom', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `${params.data.id}`,
      }
    )
  },
  { field: 'company.name', headerName: 'Société', type: "textColumn" },
  { field: 'salesPoint.name', headerName: 'Point de vente', type: "textColumn" },
];

const warehouseTransferHeaders = [
  {
    field: 'id', headerName: 'Référence', type: "linkColumn",
    cellRendererParams: (params) => (
      {
        link: `/warehouses/transfert/${params.data.id}`,
      }
    )
  },
  { field: 'fromwarehouse.name', headerName: 'Entrepôt source', type: "textColumn" },
  { field: 'towarehouse.name', headerName: 'Entrepôt destination', type: "textColumn" },
  { field: 'status', headerName: 'Statut', type: "textColumn" },
  { field: 'date', headerName: 'Date', type: "textColumn" },
  { field: 'deadline', headerName: 'Date limite', type: "textColumn" },
];

const ProductHeaders = [
  { field: 'code', headerName: 'Code', type: "textColumn" },
  { field: 'label', headerName: 'Désignation', type: "textColumn" },
  { field: 'price', headerName: 'Prix', type: 'numberColumn' },
  { field: 'unit', headerName: 'Unité' },
];
/** 
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
*/
const SubstanceGlassHeaders = [
  ...ProductHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'substance.productGlass.' + elem.field) && elem),
  { field: 'substance.glass.type', headerName: 'Type', type: "textColumn" },
  { field: 'substance.glass.color', headerName: 'Couleur', type: "textColumn" },
  { field: 'substance.glass.thickness', headerName: 'épaisseur', type: "numberColumn" },
];
const SubstanceAccessoryHeaders = [
... ProductHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'substance.productAccessory.' + elem.field)&& elem),
 { field: 'substance.accessory.category', headerName: 'Catégorie' },
];

const SubstanceConsumableHeaders = [

  ...ProductHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'substance.productConsumable.' + elem.field) && elem),
  { field: 'substance.consomable.category', headerName: 'Catégorie' },

];


const GlassWarehouseHeaders = [
  {
    headerName: 'Substance: Produit Stockable',
    children: SubstanceGlassHeaders
  },
  { field: 'quantity', headerName: 'Quantité' },
  {
    headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },

];

const ConsumableWarehouseHeaders = [
  {
    headerName: 'Substance: Consommables/Matiére Première',
    children:
      SubstanceConsumableHeaders
  },
  { field: 'quantity', headerName: 'Quantité' },
  {
    headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },
];

const AccessoryWarehouseHeaders = [
  {
    headerName: 'Substance:Accessoires /Système Apparent',
    children:
    SubstanceAccessoryHeaders
  },
  { field: 'quantity', headerName: 'Quantité' },
  {
    headerName: 'Entrepôt',
    children:
      warehouseHeaders.map(elem => ({ ...elem })).map(elem => (elem.field = 'warehouse.' + elem.field) && elem)
  },

];


export {
  warehouseHeaders,
  warehouseTransferHeaders,
  //GlassHeaders,
  GlassWarehouseHeaders,
  ConsumableWarehouseHeaders,
  AccessoryWarehouseHeaders,
};
