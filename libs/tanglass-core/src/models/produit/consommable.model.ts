import { Mat } from '@TanglassCore/models/produit/glasse.model';

export  class Consumable {
  public static COLUMN_DEFS = [
    { field: 'code', headerName: 'Code', type: "textColumn"},
    { field: 'label', headerName: 'Libellé', type: "textColumn"},
    { field: 'type', headerName: 'Type'}
  ];
  id?: number;
  code:string='';
  label: string='';
  Mat: Mat;
}

export class Stadip extends Consumable  {

}
export class Peinture extends Consumable  {
  color: string='';
}
export class DoubleVitrage extends Consumable  {
}

export class ConsommablePieces extends Consumable  {
}
export class Uchannel extends Consumable  {
}
export class TubeInox extends Consumable  {
}

