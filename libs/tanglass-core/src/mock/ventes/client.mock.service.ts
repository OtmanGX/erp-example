import { Injectable } from "@angular/core";
import { of as observableOf, Observable } from "rxjs";
import { Client } from "../../models/ventes/client.model";
import {ClientService} from '../../services/ventes/client.service'
import { clients} from '../../data/ventes/client.data';
import { BaseMockService } from "../shared/base.mock.service";
import { Mixin } from 'ts-mixer';

class ClientMockData extends BaseMockService<Client> {
  constructor() {
    super();
    this.listData = clients;
  }
}

@Injectable({
  providedIn: "root",
})
export class ClientMockService extends Mixin(ClientService,ClientMockData){
}




