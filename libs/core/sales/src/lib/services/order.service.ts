import { Injectable } from '@angular/core';
import {
  GetAllOrdersGQL,
  InsertOrderGQL,
  GetOrderByIdGQL,
  DeleteOrdersGQL,
  InsertOrderMutationVariables

} from '@tanglass-erp/infrastructure/graphql';
import { invoiceFilter } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private getAllOrdersGQL: GetAllOrdersGQL,
    private deleteOrdersGQL: DeleteOrdersGQL,
    private insertOrderGQL: InsertOrderGQL,
    private getOrderByIdGQL: GetOrderByIdGQL
  ) {}

  getAll(params:invoiceFilter = {}) {
    return this.getAllOrdersGQL.watch(params).valueChanges;
  }

  removeMany(ids: number[]) {
    return this.deleteOrdersGQL.mutate({ids});
  }


  getOneById(id: number) {
    return this.getOrderByIdGQL.fetch({id})
  }

  insertOne(order:InsertOrderMutationVariables) {
    return this.insertOrderGQL.mutate(order);
  }




}
