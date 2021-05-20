import { Injectable } from '@angular/core';
import {
  GetAllOrdersGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { flattenObj } from "@tanglass-erp/core/common";
import { Order } from "../models/order";
import { map, } from 'rxjs/operators';
import { from, of, observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private getAllOrdersGQL: GetAllOrdersGQL

  ) {
  }

  getAll() {


    return this.getAllOrdersGQL.watch().valueChanges

  }



}

