import { Injectable } from '@angular/core';
import {
  GetAllOrdersGQL,
  InsertOrderGQL,
  GetOrderByIdGQL,
  DeleteOrdersGQL,
  InsertOrderMutationVariables,
} from '@tanglass-erp/infrastructure/graphql';
import { invoiceFilter } from '../models/invoice';
import { map } from 'rxjs/operators';
import { Product_draft } from '../models/product';
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
        products: data.data.sales_order_by_pk.draft.product_drafts.map(
          (product) => {
            return this.adapter(product);
          }
        ),
      }))
    );
  }

  adapter(product) {
    if (product.service_draft) {
      return {
        ...product,
        dependent_id: product.service_draft.dependent_id,
      };
    } else if (product.consumable_draft) {
      return {
        ...product,
        dependent_id: product.consumable_draft.dependent_id,
      };
    } else return product;
  }
  insertOne(order: InsertOrderMutationVariables) {
    return this.insertOrderGQL.mutate(order);
  }
}
