import { Injectable } from '@angular/core';
import {
  GetAllOrdersGQL,
  InsertOrderGQL,
  GetOrderByIdGQL,
  DeleteOrdersGQL,
  InsertOrderMutationVariables,
  TransformQuotationToOrderGQL
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { TransformedQuotation,Product_draft,invoiceFilter,productAdapter} from "@tanglass-erp/core/sales";
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private getAllOrdersGQL: GetAllOrdersGQL,
    private deleteOrdersGQL: DeleteOrdersGQL,
    private insertOrderGQL: InsertOrderGQL,
    private getOrderByIdGQL: GetOrderByIdGQL,
    private transformQuotationToOrderGQL:TransformQuotationToOrderGQL
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
            return productAdapter(product);
          }
        ),
      }))
    );
  }

  insertOne(order: InsertOrderMutationVariables) {
    return this.insertOrderGQL.mutate(order);
  }

  CreateFromQuotation(order:TransformedQuotation) {
 }

}
