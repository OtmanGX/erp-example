import { Injectable } from '@angular/core';
import {
  GetAllGlassesGQL,
  GetGlassByIdGQL,
  InsertGlassGQL,
  InsertGlassMutationVariables,

} from '@tanglass-erp/infrastructure/graphql';
import { Glass,DetailedGlass } from "../models/glass.model";

@Injectable({
  providedIn: 'root'
})
export class GlassService {


  constructor(
    private getAllGQL: GetAllGlassesGQL,
    private getByIdGQL: GetGlassByIdGQL,
    private insertOneGQL: InsertGlassGQL,

  ) {
 
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.subscribe({ id })
  }

  insertOne(createdOne: InsertGlassMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)
  }

}
