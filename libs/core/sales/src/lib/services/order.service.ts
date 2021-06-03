import { Injectable } from '@angular/core';
import { GetAllOrdersGQL, DeleteOrdersGQL } from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(
    private getAllOrdersGQL: GetAllOrdersGQL,
    private deleteOrdersGQL: DeleteOrdersGQL
  ) {}

  getAll() {
    return this.getAllOrdersGQL.watch().valueChanges;
  }

  removeMany(ids: number[]) {
    return this.deleteOrdersGQL.mutate({ids});
  }
}
