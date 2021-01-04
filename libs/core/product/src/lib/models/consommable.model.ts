import { Mat } from './glasse.model';
import { DateFields } from '@tanglass-erp/core/shared';

@DateFields
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
//
