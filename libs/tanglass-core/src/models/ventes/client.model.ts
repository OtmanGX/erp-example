import { Contact } from "./contact.model";
import { Observable } from 'rxjs';
import { ContactMockService } from '../../mock/ventes/contact.mock.service';

export class Client {
  id?: number=null;
  type: string='';
  nom: string='';
  ICE?: string='';
  IF?: string='';
  addresses: string[]=[];
  phone?: string='';
  Fax?: string='';
  email?: string='';
  webSite?: string='';
  vendeur?:string='';
  département?:string='';
  note?: string='';
  contacts?: Contact[]=[];
}

