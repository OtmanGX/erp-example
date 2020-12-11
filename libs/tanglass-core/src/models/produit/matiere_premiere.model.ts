
export class MatièrePremière {
  id?: number;
  code:string='';
  type: string='';
  color:string='';
  libelle: string='';
  prix_Achat: number=0;
  prix_default: number=0;
  prix_min: number=1;
  prix_max: number=1;
  epaisseur: number=0;
  tags: string='';
  companie:string[]=[];
}

export class VerreClient {
  id?: number;
  code:string='';
  libelle: string='';
  epaisseur: number=0;
  tags: string='';
}