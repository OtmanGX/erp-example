
export abstract class Service {
  id?: number;
  code:string='';
  libelle: string='';
  libelleUsine:string='';

  prix_default: number=0;
  prix_min: number=0;
  prix_max: number=0;
  companie:string[]=[];
}

export class Coupe extends Service {
  epaisseur:number=2;
  outil:string='';
}

export class BordPolis extends Service {
  epaisseur:number=2;
  outil:string='';
  type:string='';
}

export class Trous extends Service  {
  epaisseur_min:number=2;
  epaisseur_max:number=19;
  diametre_min:number;
  diametre_max:number;
  outil:string='';
}

export class Encoche extends Service {
  epaisseur_min:number=2;
  epaisseur_max:number=19;
  outil:string='';
  type:string='';
}

export class Biseautage extends Service {
  type:string='';
}

export class Trempage extends Service  {
  epaisseur:number=2;
}

export class Bombage extends Service  {
}

export class Sablage extends Service {
  type:string='';
}

export class Peinture extends Service  {
}
export class Gravage extends Service  {
}
export class Aluminium extends Service  {
}
export class Pose extends Service  {
}





