import { Injectable } from '@angular/core';
import {
  InsertDraftGQL,
  InsertConsumableDraftGQL,
  InsertGlassDraftGQL,
  InsertServiceDraftGQL,
  InsertAccessoryDraftGQL,
  DeleteProductDraftGQL,
  GetAllDraftsGQL,
  GetDraftByIdGQL,
  GetProductsByTypeGQL,
  Sales_Product_Type_Enum
} from '@tanglass-erp/infrastructure/graphql';
import { Product_draft } from "../models/product";
@Injectable({
  providedIn: 'root'
})
export class DraftService {

  constructor(
    private insertOneGQL: InsertDraftGQL,
    private insertGlass: InsertGlassDraftGQL,
    private insertConsumable: InsertConsumableDraftGQL,
    private insertService: InsertServiceDraftGQL,
    private insertAccessory: InsertAccessoryDraftGQL,
    private deleteProductDraft: DeleteProductDraftGQL,
    private getProductsByTypeGQL: GetProductsByTypeGQL,
    private getAllDraftsGQL: GetAllDraftsGQL,
    private getDraftByIdGQL: GetDraftByIdGQL
  ) {
  }

  getAll() {


    return this.getAllDraftsGQL.watch().valueChanges

  }

  getOneById(id: number) {
    return this.getDraftByIdGQL.watch({ id }).valueChanges

  }

  insertOne() {
    return this.insertOneGQL.mutate()
  }

  updateOne(updatedOne) {
  }

  removeOne(id: string) {
  }

  removeMany(ids: string[]) {
  }
  //Get all the products in a draft (order or quotation)
  getDraftPorducts(draft_id: number) {
    return this.getProductsByTypeGQL.watch({ draft_id }).valueChanges
  }
  //Get just the glasses in a draft (order or quotation)

  getDraftGlasses(draft_id) {
    return this.getProductsByTypeGQL.watch({ draft_id, type: Sales_Product_Type_Enum.Verre }).valueChanges
  }

  //Get just the Services in a draft (order or quotation)

  getDraftServices(draft_id) {
    return this.getProductsByTypeGQL.watch({ draft_id, type: Sales_Product_Type_Enum.Service }).valueChanges

  }
  //Get just the Accessories in a draft (order or quotation)

  getDraftAccessories(draft_id) {
    return  this.getProductsByTypeGQL.watch({ draft_id, type: Sales_Product_Type_Enum.Accessoire }).valueChanges

  }

  //Get just the Consumables in a draft (order or quotation)

  getDraftConsumables(draft_id) {
    return this.getProductsByTypeGQL.watch({ draft_id, type: Sales_Product_Type_Enum.Consommable }).valueChanges
  }

  //add Glass to  a Draft (order or quotation )
  addGlass(createdItem: Product_draft) {
    return this.insertGlass.mutate(createdItem)
  }

  //add Consumable to  a Draft (order or quotation )

  addConsumable(createdItem: Product_draft) {
    return this.insertConsumable.mutate(createdItem)
  }

  //add Accessory to  a Draft (order or quotation )

  addAccessory(createdItem: Product_draft) {
    return this.insertAccessory.mutate(createdItem)
  }

  //add Service to  a Draft (order or quotation )

  addService(createdItem: Product_draft) {
    return this.insertService.mutate(createdItem)
  }
  removeProduct(id: string) {
    return  this.deleteProductDraft.mutate({ id })
  }
}
