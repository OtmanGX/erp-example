import { Injectable } from '@angular/core';
import {
  DeleteOrdersGQL,
  GetAllOrdersGQL,
  GetOrderByIdGQL,
  InsertOrderGQL,
  InsertOrderMutationVariables,
  UpdateOrderGQL
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { UpdateOrder } from '../models/order';
import { productAdapter } from '../utils/product-adapter';
import { invoiceFilter } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private getAllOrdersGQL: GetAllOrdersGQL,
    private deleteOrdersGQL: DeleteOrdersGQL,
    private insertOrderGQL: InsertOrderGQL,
    private getOrderByIdGQL: GetOrderByIdGQL,
    private updateOrderGQL:UpdateOrderGQL
  ) {}

  getAll(params: invoiceFilter = {}) {
    return this.getAllOrdersGQL.watch(params).valueChanges;
  }

  removeMany(ids: number[]) {
    return this.deleteOrdersGQL.mutate({ ids });
  }

  getOneById(id: number) {
    return this.getOrderByIdGQL.fetch({ id }).pipe(
      map((data) => ({
        ...data.data.sales_order_by_pk,
        draft_status: data.data.sales_order_by_pk.draft.status,
        products: data.data.sales_order_by_pk.draft.product_drafts.map(
          (product) => {
            return productAdapter(product);
          }
        ),
      }))
    );
  }

  insertOne(order: InsertOrderMutationVariables) {
    return this.insertOrderGQL.mutate(order);
  }
  updateOrder(order:UpdateOrder) {
     return this.updateOrderGQL.mutate(order)
  }

}
