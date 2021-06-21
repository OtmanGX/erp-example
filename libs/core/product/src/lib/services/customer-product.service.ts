import { Injectable } from '@angular/core';
import {
  GetAllCustomerProductsGQL,
  InsertCustomerProductGQL,
  DeleteCustomerProductGQL,
  DeleteManyCustomerProductsGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { CustomerProduct } from "../models/customerProduct.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerProductService {


  constructor(
    private getAllGQL: GetAllCustomerProductsGQL,
    private insertOneGQL: InsertCustomerProductGQL,
    private deleteOneGQL: DeleteCustomerProductGQL,
    private deleteMany:DeleteManyCustomerProductsGQL,
  ) {}

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }


  insertOne(createdOne: CustomerProduct) {
    return this.insertOneGQL.mutate(createdOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

  removeMany(ids: string[]) {
    return this.deleteMany.mutate({ids})
  }
}
