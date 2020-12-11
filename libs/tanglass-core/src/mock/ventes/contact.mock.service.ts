import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";
import { Contact } from "../../models/ventes/contact.model";
import {ContactService} from '../../services/ventes/contact.service'
import { contacts} from '../../data/ventes/contact.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';


class ContactMockData extends BaseMockService<Contact> {
  constructor() {
    super();
    this.listData = contacts;
  }
}

@Injectable({
  providedIn: "root",
})
export class ContactMockService extends Mixin(ContactService,ContactMockData){
}



