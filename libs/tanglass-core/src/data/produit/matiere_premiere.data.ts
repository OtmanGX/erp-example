import { MatièrePremière,VerreClient } from "../../models/produit/matiere_premiere.model";
import { additionalParam_PD } from "../../models/produit/type_produit.model";

  export const matierePremiere: MatièrePremière[] = [

  {
    id:1,
    code:'VC5',
    type: "normale" ,
    color:  "clair" ,
    libelle:'VERRE CLAIR 5MM',
    prix_Achat:0,
    prix_default:60,
    prix_min:60,
    prix_max:70,
    epaisseur:5,
    tags:'',
    companie:['Tanglass','Trimar'],
  },

  {
    id:2,
    code:'VC6',
    type: "normale" ,
    color: "clair" ,
    libelle:'VERRE CLAIR 6MM',
    prix_Achat:0,
    prix_default:70,
    prix_min:70,
    prix_max:84,
    epaisseur:6,
    tags:'',
    companie:['Tanglass','Trimar'],
  },

  {
    id:3,
    code:'VC8',
    type: "normale"  ,
    color: "clair" ,
    libelle:'VERRE CLAIR 8MM',
    prix_Achat:0,
    prix_default:100,
    prix_min:100,
    prix_max:120,
    epaisseur:8,
    tags:'',
    companie:['Tanglass','Trimar'],
  },

  {
    id:4,
    code:'VC10',
    type: "normale" ,
    color:  "clair" ,
    libelle:'VERRE CLAIR 10MM',
    prix_Achat:0,
    prix_default:140,
    prix_min: 140,
    prix_max: 168,
    epaisseur:10,
    tags:'',
    companie:['Tanglass','Trimar'],
  },

  {
    id:5,
    code:'VSSBRO4',
    type: "stop-sol" ,
    color:  "bronze" ,
    libelle:'VERRE STOP-SOL BRONZE 4MM',
    prix_Achat:0,
    prix_default:82,
    prix_min: 82,
    prix_max: 98.4,
    epaisseur:4,
    tags:'',
    companie:['Tanglass','Trimar'],
  },

  ]

  export const typesMatierePremiere: additionalParam_PD[] = [
    { id: 1, name: "Karatachi" },

    {
      id: 2,
      name: "Mousline",
    },
    { id: 3, name: "Normale" },

    { id: 4, name: "ARME" },
  ];
  export const colorsMatierePremiere: additionalParam_PD[] = [
    { id: 1, name: "Clair" },

    {
      id: 2,
      name: "Blanc",
    },
    { id: 3, name: "VERT" },

    { id: 4, name: "BRONZE CLAIR" },
  ];

  export const verresClients: VerreClient[] = [
    {
    id:1,
    code:'AC3',
    libelle:'Article Client 3mm',
    epaisseur:3,
    tags:'',
  },
  {
    id:2,
    code:'AC4',
    libelle:'Article Client 4mm',
    epaisseur:4,
    tags:'',
  },
  {
    id:3,
    code:'AC5',
    libelle:'Article Client 5mm',
    epaisseur:5,
    tags:'',
  },
  {
    id:4,
    code:'AC6',
    libelle:'Article Client 4mm',
    epaisseur:4,
    tags:'',
  },
  {
    id:5,
    code:'AC8',
    libelle:'Article Client 8mm',
    epaisseur:8,
    tags:'',
  },
  {
    id:6,
    code:'AC10',
    libelle:'Article Client 10mm',
    epaisseur:10,
    tags:'',
  },
]
