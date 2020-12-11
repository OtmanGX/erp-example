import { Client } from "./client.model";
import { Observable } from 'rxjs';

export class Contact {
  id?: number=null;
  nom: string ='';
  prénom: string='';
  civilité: string='';
  fonction: string='';
  address?: string='';
  phone?: string='';
  Fax?: string='';
  email?: string='';
  note?: string='';
  clients?: Client[]=[];
}

