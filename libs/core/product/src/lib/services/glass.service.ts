import { Injectable } from '@angular/core';
import {
  GetAllGlassesGQL,


} from '@tanglass-erp/infrastructure/graphql';
import { Glass } from "../models/glass.model";

@Injectable({
  providedIn: 'root'
})
export class GlassService {


  constructor(
    private getAllGQL: GetAllGlassesGQL,

  ) {
    let data: Glass[]
    this.getAll().subscribe(o => data = o.data.product_glass)

  }



  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

}
