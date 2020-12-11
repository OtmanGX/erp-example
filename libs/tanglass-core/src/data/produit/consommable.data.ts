
import { PeintureMockService } from '../../mock/produit/consommable/peinture.mock.service';
import { Consommable,Stadip,DoubleVitrage } from "../../models/produit/consommable.model";
import { Peinture } from '../../models/produit/service.model';
import { additionalParam_PD } from "../../models/produit/type_produit.model";
import { Consommable_purchases } from '../../models/ventes/customerPurchases/consommable_purchases.model';


export const consommables: Consommable[] = [

  {
    id: 1,
    code:'BA6',
    libelle:'INTERCALAIRE : BAGUETTE 6 MM (en ML)',
    prix_Achat:0,
    prix_default:40,
    prix_min: 40,
    prix_max: 48,
    tags:'',
    companie:['Trimar'],
    libelleUsine:'consommable',
  },

  {
    id: 2,
    code:'BA8',
    libelle:'INTERCALAIRE : BAGUETTE 8 MM (en ML)',
    prix_Achat:0,
    prix_default:46,
    prix_min: 46,
    prix_max: 55.2,
    tags:'',
    companie:['Trimar'],
    libelleUsine:'consommable',
  },

  {
    id: 3,
    code:'BD1322_D',
    libelle:'BAGUETTE DECORATIF REF 1322 ARGENTÉ (EN ML)',
    prix_Achat:0,
    prix_default:60,
    prix_min: 60,
    prix_max: 72,
    tags:'',
    companie:['Trimar'],
    libelleUsine:'consommable',
  },



]
export const Baguettes: DoubleVitrage[] = [

];
export const films:Stadip [] = [
  {
    id:1,
    code:'FTBLA',
    libelle:'FILM TRANSPARANT BLANC ',
    prix_Achat:0,
    prix_default:170,
    prix_min:170,
    prix_max:250,
    tags: '',
    companie:['Trimar'],
    libelleUsine:'consommable',
  },
  {
    id:1,
    code:'FOBLA',
    libelle:'FILM OPAQUE BLANC  ',
    prix_Achat:0,
    prix_default:280,
    prix_min:280,
    prix_max:336,
    tags: '',
    companie:['Trimar'],
    libelleUsine:'consommable',
  }
];
export const types_Consommable: additionalParam_PD[] = [
  {
    id: 1,
    name: "Baguette ",
  },

  {
    id: 2,
    name: "Film",
  },


];
export const colorsStadip=[];
export const typesStadip=[];

export const peintures=[

];
export const colorsPeinture=[];
export const tubesInox=[];
export const uchannels=[];
