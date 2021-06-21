import { Injectable } from '@angular/core';
import {
  GetAllAccessoriesGQL,
  InsertAccessoryGQL,
  GetAccessoryByIdGQL,
  DeleteOneGQL,
  DeleteManyGQL,
  InsertAccessoryMutationVariables
} from '@tanglass-erp/infrastructure/graphql';
import {  insertedAccessory } from "../models/accessory.model";
import { adaptProduct } from '../utils/dataAdapter';

@Injectable({
  providedIn: 'root'
})
export class AccessoryService  {

  constructor(
    private getAllGQL: GetAllAccessoriesGQL,
    private getByIdGQL: GetAccessoryByIdGQL,
    private insertOneGQL: InsertAccessoryGQL,
    private deleteOneGQL: DeleteOneGQL,
    private deleteMany:DeleteManyGQL
  ) {

    /**
  this.insertOne(
    {
category: Product_AccessoryTypes_Enum.Accessoire,
quota: 1.5,
product: {code: "access",label: "accessory",
price: 150,priceMax: 130,priceMin: 120,
unit: Product_Product_Unit_Enum.M2,
product_companies: 
{data:[ {companyid:"3fe4e491-9f79-4bb8-affb-a3d1c4c097b4" },
        {companyid:"27024dd5-335c-43ee-9da4-22a49303db67" }]}
}
}
).subscribe(obj=>console.log(obj.data.insert_product_accessory_one))

this.getOneById("eb6c4f62-a1ec-401e-a206-1274353a6245").subscribe(o=>console.log(o.data.product_accessory_by_pk))

 */
  }

  getAll() {
    return this.getAllGQL.watch().valueChanges
  }

  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: insertedAccessory) {
   let addeValue:InsertAccessoryMutationVariables=adaptProduct(createdOne,'accessory')
    return this.insertOneGQL.mutate(addeValue)
  }

  removeOne(code: string) {
    return this.deleteOneGQL.mutate({ code })
  }

  removeMany(codes: string[]) {
  
    return this.deleteMany.mutate({codes})
  }

}
