import {UsersProfile  } from "./user.models";
import { DateFields } from '@tanglass-erp/core/shared';

export class SalePoint{
  public static columnDefs (prefix = '') {
    if (prefix.length) prefix += '.';
    return [
          { field: prefix + 'name', headerName: 'Nom', type: "textColumn" },
          { field: prefix + 'phone', headerName: 'Téléphone', type: "textColumn"},
          { field: prefix + 'fax', headerName: 'Fax', type: "textColumn"},
          { field: prefix + 'email', headerName: 'E-mail', type: "textColumn"},
      ]
  }
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
  }

@DateFields
export class DetailedSalePoint {
    address:string;
    email:string;
    fax:string;
    id:string;
    name:string;
    phone:string;
    usersProfiles:UsersProfile[];
  }


