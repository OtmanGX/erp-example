import { Injectable } from '@angular/core';
import {
  GetAllGlassesGQL,
  GetGlassByIdGQL,
  InsertGlassGQL,
  DeleteOneGQL,
  DeleteManyGQL,
  InsertGlassMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import { Glass,DetailedGlass, InsertedGlass } from "../models/glass.model";
import { adaptProduct } from '../utils/dataAdapter';

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
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: InsertedGlass) {
    let addeValue:InsertGlassMutationVariables=adaptProduct(createdOne,'glasse')
    return this.insertOneGQL.mutate(addeValue)
  }

  removeOne(code: string) {
    return this.deleteOneGQL.mutate({ code })
  }

  removeMany(codes: string[]) {
    return this.deleteMany.mutate({codes})
  }

    
  addType(){


  }
  addColor(){

  }

}
