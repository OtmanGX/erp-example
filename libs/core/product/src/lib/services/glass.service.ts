import { Injectable } from '@angular/core';
import {
  GetAllGlassesGQL,
  GetGlassByIdGQL,
  InsertGlassGQL,
  DeleteOneGQL,
  DeleteManyGQL,
  InsertGlassMutationVariables,
  GetGlassTypesGQL,
  GetGlassColorsGQL,
  AddGlassColorGQL,
  AddGlassTypeGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
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
    private deleteMany:DeleteManyGQL,
    private getGlassTypesGQL:GetGlassTypesGQL,
    private addGlassColorGQL:AddGlassColorGQL,
    private addGlassTypeGQL:AddGlassTypeGQL,
    private getGlassColorsGQL:GetGlassColorsGQL

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


  addType(type:string){
    return this.addGlassTypeGQL.mutate({type})


  }
  addColor(color:string){
    return this.addGlassColorGQL.mutate({color})

  }

  getTypes(){
    return this.getGlassTypesGQL.watch().valueChanges.pipe(map((data)=>
    data.data.product_glassType.map((res)=>res.type)))

  }
  getColors(){
    return this.getGlassColorsGQL.watch().valueChanges.pipe(map((data)=>
    data.data.product_glassColor.map((res)=>res.color)))
  }
}
