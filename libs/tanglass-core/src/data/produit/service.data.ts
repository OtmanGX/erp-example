import { Coupe ,BordPolis ,Encoche,Sablage,
  Trempage,Trous,Biseautage,Bombage,Peinture,
  Gravage,Aluminium, Pose } from "../../models/produit/service.model";
import { additionalParam_PD } from "../../models/produit/type_produit.model";

export const coupes:Coupe []=[

  {
    id: 1,
    code:'COVC5',
    libelle: 'COUPE VERRE CLAIR 5MM ',
    prix_default: 10,
    prix_min: 10,
    prix_max: 12,
    epaisseur:5,
    outil:'Manuel',
    companie:['Tanglass','Trimar'],
    libelleUsine:'CO',
  },

  {
    id: 2,
    code:'COVC6',
    libelle: 'COUPE VERRE CLAIR 6MM ',
    prix_default: 15,
    prix_min: 15,
    prix_max: 18,
    epaisseur:6,
    outil:'Manuel',
    companie:['Tanglass','Trimar'],
    libelleUsine:'CO',
  },

  {
    id: 3,
    code:'COVC8',
    libelle: 'COUPE VERRE CLAIR 8MM ',
    prix_default: 10,
    prix_min: 10,
    prix_max: 12,
    epaisseur:8,
    outil:'Manuel',
    companie:['Tanglass','Trimar'],
    libelleUsine:'CO',
  },

  {
    id: 4,
    code:'COVC10',
    libelle: 'COUPE VERRE CLAIR 10MM ',
    prix_default: 10,
    prix_min: 10,
    prix_max: 12,
    epaisseur:10,
    outil:'Manuel',
    companie:['Tanglass','Trimar'],
    libelleUsine:'CO',
  },

  {
    id: 5,
    code:'COVSSBRO4',
    libelle: 'COUPE VERRE STOP-SOL BRONZE 4MM',
    prix_default: 20,
    prix_min: 20,
    prix_max: 22,
    epaisseur:4,
    outil:'Manuel',
    companie:['Tanglass','Trimar'],
    libelleUsine:'CO',
  },

];
export const bordPolis:BordPolis []=[

  {
    id: 1,
    code:'BBPP5',
    libelle: 'BORD POLIS PLAT  :  VERRE DE 5 MM ',
    prix_default: 13,
    prix_min: 13,
    prix_max: 15.6,
    epaisseur:5,
    outil:'Manuel',
    type:'PLAT',
    companie:['Tanglass','Trimar'],
    libelleUsine:'BP',
  },

  {
    id: 2,
    code:'BBPP6',
    libelle: 'BORD POLIS PLAT  :  VERRE DE 6 MM ',
    prix_default: 13,
    prix_min: 13,
    prix_max: 15.6,
    epaisseur:6,
    outil:'Manuel',
    type:'PLAT',
    companie:['Tanglass','Trimar'],
    libelleUsine:'BP',
  },

  {
    id: 3,
    code:'BBPP8',
    libelle: 'BORD POLIS PLAT  :  VERRE DE 8 MM ',
    prix_default: 15,
    prix_min: 15,
    prix_max: 18,
    epaisseur:8,
    outil:'Manuel',
    type:'PLAT',
    companie:['Tanglass','Trimar'],
    libelleUsine:'BP',
  },

  {
    id: 1,
    code:'BBPP10',
    libelle: 'BORD POLIS PLAT  :  VERRE DE 10 MM ',
    prix_default: 15,
    prix_min: 15,
    prix_max: 18,
    epaisseur:10,
    outil:'Manuel',
    type:'PLAT',
    companie:['Tanglass','Trimar'],
    libelleUsine:'BP',
  },
]
export const trous:Trous []=[

  {
    id: 1,
    code:'T6-16A',
    libelle: 'TROUS Ø  6-16 MM -A- (VERRE 4/5/6)',
    prix_default: 7.2,
    prix_min: 7.2,
    prix_max: 8.64,
    outil:'Manuel',
    epaisseur_min:4,
    epaisseur_max:6,
    diametre_min:6,
    diametre_max:16,
    companie:['Tanglass','Trimar'],
    libelleUsine:'TR',
  },

  {
    id:2 ,
    code:'T6-16B',
    libelle: 'TROUS Ø  6-16 MM -B- (VERRE 8/10/12) ',
    prix_default: 12,
    prix_min: 12,
    prix_max: 14.4,
    outil:'Manuel',
    epaisseur_min:8,
    epaisseur_max:12,
    diametre_min:6,
    diametre_max:16,
    companie:['Tanglass','Trimar'],
    libelleUsine:'TR',
  },

  {
    id:3 ,
    code:'T16-30A',
    libelle: 'TROUS Ø 16-30 MM -A- (VERRE 4/5/6) ',
    prix_default: 12,
    prix_min: 12,
    prix_max: 14,
    outil:'Manuel',
    epaisseur_min:4,
    epaisseur_max:6,
    diametre_min:16,
    diametre_max:30,
    companie:['Tanglass','Trimar'],
    libelleUsine:'TR',
  },

  {
    id:4 ,
    code:'T16-30B',
    libelle: 'TROUS Ø 16-30 MM -B- (VERRE 8/10/12) ',
    prix_default: 16.8,
    prix_min: 16.8,
    prix_max: 20.16,
    outil:'Manuel',
    epaisseur_min:8,
    epaisseur_max:12,
    diametre_min:16,
    diametre_max:30,
    companie:['Tanglass','Trimar'],
    libelleUsine:'TR',
  },
]
export const encoches:Encoche []=[
  {
    id: 1,
    code:'EFA',
    libelle: 'ENCOCHE DE FIXATION -A- (VERRE 4/5/6)',
    prix_default: 20,
    prix_min: 20,
    prix_max: 24,
    outil:'Manuel',
    type:'FIXATION ',
    epaisseur_min:4,
    epaisseur_max:6,
    companie:['Tanglass','Trimar'],
    libelleUsine:'EF',

  },

  {
    id: 2,
    code:'EFB',
    libelle: 'ENCOCHE DE FIXATION -B- (VERRE 8/10/12)',
    prix_default: 25,
    prix_min: 25,
    prix_max: 30,
    outil:'Manuel',
    type:'FIXATION ',
    epaisseur_min:8,
    epaisseur_max:12,
    companie:['Tanglass','Trimar'],
    libelleUsine:'EF',
  },

  {
    id: 3,
    code:'ESA',
    libelle: 'ENCOCHE STANDARD -A- (VERRE 4/5/6)',
    prix_default: 45,
    prix_min: 45,
    prix_max: 54,
    outil:'Manuel',
    type:'STANDARD ',
    epaisseur_min:4,
    epaisseur_max:6,
    companie:['Tanglass','Trimar'],
    libelleUsine:'EF',
  },

  {
    id: 34,
    code:'ESB',
    libelle: 'ENCOCHE STANDARD -B- (VERRE 8/10/12)',
    prix_default: 50,
    prix_min: 50,
    prix_max: 60,
    outil:'Manuel',
    type:'STANDARD -B-',
    epaisseur_min:8,
    epaisseur_max:12,
    companie:['Tanglass','Trimar'],
    libelleUsine:'EF',
  },
]
export const trempages:Trempage []=[


  {
    id: 1,
    code:'TRS10',
    epaisseur:10,
    libelle: 'TREMPAGE : VERRE 10MM',
    prix_default: 210,
    prix_min: 210,
    prix_max: 252,
    companie:['Tanglass',],
    libelleUsine:'TRMP',
  },

  {
    id: 2,
    code:'TRS8',
    epaisseur:8,
    libelle: 'TREMPAGE : VERRE 8MM',
    prix_default: 180,
    prix_min: 180,
    prix_max: 216,
    companie:['Tanglass',],
    libelleUsine:'TRMP',
  },
]

export const bombages:Bombage []=[

  {
    id: 1,
    code:'BO6',
    libelle: 'BOMBAGE : VERRE 6MM',
    prix_default: 700,
    prix_min: 700,
    prix_max: 840,
    companie:['Tanglass',],
    libelleUsine:'BO',
  },

  {
    id: 2,
    code:'BO5',
    libelle: 'BOMBAGE : VERRE 5 MM',
    prix_default: 700,
    prix_min: 700,
    prix_max: 840,
    companie:['Tanglass',],
    libelleUsine:'BO',
  },


]

export const sablages:Sablage []=[

  {
    id: 1,
    code:'SAD',
    type:'DÉCORATIF',
    libelle: 'SABLAGE DÉCORATIF',
    prix_default: 170,
    prix_min: 170,
    prix_max: 204,
    companie:['TRIMAR'],
    libelleUsine:'Sablage',
  },


  {
    id: 2,
    code:'SAB',
    type:'AVEC BANDE',
    libelle: 'SABLAGE AVEC BANDE',
    prix_default: 150,
    prix_min: 150,
    prix_max: 180,
    companie:['TRIMAR'],
    libelleUsine:'Sablage',
  },
]

export const biseautages:Biseautage []=[

  {
    id: 1,
    code:'BIP',
    type:'PLAT',
    libelle: 'BISEAUTAGE PLAT',
    prix_default: 150,
    prix_min: 150,
    prix_max: 180,
    companie:['TRIMAR',],
    libelleUsine:'Sablage',
  }

]



export const typesSablage: additionalParam_PD[] = [
  { id: 1, name: "Décoratif" },
  { id: 2, name: "Total" },
  { id: 3, name: "Avec Bande" },
  { id: 4, name: "Avec Peinture" },
  { id: 5, name: "Couleurs Simples" },
  { id: 6, name: "Couleurs Chargés" },
];
export const peintures:Peinture []=[
]
export const gravages:Gravage []=[
]
export const aluminiums:Aluminium []=[
]
export const poses:Pose []=[
]
