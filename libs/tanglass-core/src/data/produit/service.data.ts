import { Coupe ,BordPolis ,Encoche,Sablage,
  Trempage,Trous,Biseautage,Bombage,Peinture,
  Gravage,Aluminium, Pose } from "../../../../core/product/src/lib/models/service.model";
import { additionalParam_PD } from "../../models/produit/type_produit.model";

export const coupes:Coupe []=[];
export const bordPolis:BordPolis []= [];
export const trous:Trous []= [];
export const encoches:Encoche [] = [];
export const trempages:Trempage []= [];

export const bombages:Bombage []= [];

export const sablages:Sablage []= [];

export const biseautages:Biseautage []= [];



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
