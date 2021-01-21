import { Injectable } from '@angular/core';
import {
  GetAllGlassesGQL,
  GetGlassByIdGQL,
  InsertGlassGQL,
  DeleteOneGQL,
  DeleteManyGQL
} from '@tanglass-erp/infrastructure/graphql';
import { Glass,DetailedGlass, InsertedGlass } from "../models/glass.model";

@Injectable({
  providedIn: 'root'
})
export class GlassService {


  constructor(
    private getAllGQL: GetAllGlassesGQL,
    private getByIdGQL: GetGlassByIdGQL,
    private insertOneGQL: InsertGlassGQL,
    private deleteOneGQL: DeleteOneGQL,
    private deleteMany:DeleteManyGQL
  ) {
 
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.subscribe({ id })
  }

  insertOne(createdOne: InsertedGlass) {
    return this.insertOneGQL.mutate(createdOne)
  }

  removeOne(code: string) {
    return this.deleteOneGQL.mutate({ code })
  }

  removeMany(codes: string[]) {
    return this.deleteMany.mutate({codes})
  }

}
