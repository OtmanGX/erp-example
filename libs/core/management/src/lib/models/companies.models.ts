import { DateFields } from '@tanglass-erp/core/shared';

export class Companie{
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
      { field: prefix + 'name', headerName: 'Nom', type: "textColumn"},
      { field: prefix + 'CNSS', headerName: 'CNSS', type: "textColumn"},
      { field: prefix + 'ICE', headerName: 'ICE', type: "textColumn"},
      { field: prefix + 'IF', headerName: 'IF', type: "textColumn"},
      { field: prefix + 'RC', headerName: 'RC', type: "textColumn"},
      { field: prefix + 'address', headerName: 'Adresse', type: "textColumn"},
      { field: prefix + 'phone', headerName: 'Téléphone', type: "textColumn"},
      { field: prefix + 'email', headerName: 'E-mail', type: "textColumn"},
    ]
  }
    id:string;
    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email?:string;
    name:string;
    phone:string;
}

@DateFields
export class DetailedCompanie{
    id:string;
    CNSS:string;
    ICE:string;
    IF:string;
    RC:string;
    address:string;
    email?:string;
    name:string;
    phone:string;
    website?:string;
}
