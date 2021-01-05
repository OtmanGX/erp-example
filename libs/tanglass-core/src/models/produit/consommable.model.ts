
export  class Consommable {
  id?: number;
  code:string='';
  libelle: string='';
  prix_Achat: number=0;
  prix_default: number=0;
  prix_min: number=0;
  prix_max: number=0;
  tags: string='';
  companie:string[]=[];
  libelleUsine:string='consommable'
}

export class Stadip extends Consommable  {

}
export class Peinture extends Consommable  {
  color: string='';
}
export class DoubleVitrage extends Consommable  {
}

export class ConsommablePieces extends Consommable  {
}
export class Uchannel extends Consommable  {
}
export class TubeInox extends Consommable  {
}

