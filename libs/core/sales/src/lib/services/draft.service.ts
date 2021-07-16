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
  DeleteDraftsGQL,
  Sales_Product_Type_Enum,
  DeleteProductsGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedProduct } from '@tanglass-erp/core/sales';
@Injectable({
  providedIn: 'root',
})
export class DraftService {
  constructor(
    private insertOneGQL: InsertDraftGQL,
    private insertGlass: InsertGlassDraftGQL,
    private insertConsumable: InsertConsumableDraftGQL,
    private insertService: InsertServiceDraftGQL,
    private insertAccessory: InsertAccessoryDraftGQL,
    private deleteProduct: DeleteProductDraftGQL,
    private deleteDraftsGQL: DeleteDraftsGQL,
    private getProductsByTypeGQL: GetProductsByTypeGQL,
    private getAllDraftsGQL: GetAllDraftsGQL,
    private getDraftByIdGQL: GetDraftByIdGQL,
    private DeleteProductsGQL: DeleteProductsGQL
  ) {}

  getAll() {
    return this.getAllDraftsGQL.watch().valueChanges;
  }

  getOneById(id: number) {
    return this.getDraftByIdGQL.watch({ id }).valueChanges;
  }

  insertOne() {
    return this.insertOneGQL.mutate();
  }

  removeMany(ids: number[]) {
    return this.deleteDraftsGQL.mutate({ ids });
  }
  //Get all the products in a draft (order or quotation)
  getDraftPorducts(draft_id: number) {
    return this.getProductsByTypeGQL.watch({ draft_id }).valueChanges;
  }
  //Get just the glasses in a draft (order or quotation)

  getDraftGlasses(draft_id) {
    return this.getProductsByTypeGQL.watch({
      draft_id,
      type: Sales_Product_Type_Enum.Verre,
    }).valueChanges;
  }

  //Get just the Services in a draft (order or quotation)

  getDraftServices(draft_id) {
    return this.getProductsByTypeGQL.watch({
      draft_id,
      type: Sales_Product_Type_Enum.Service,
    }).valueChanges;
  }
  //Get just the Accessories in a draft (order or quotation)

  getDraftAccessories(draft_id) {
    return this.getProductsByTypeGQL.watch({
      draft_id,
      type: Sales_Product_Type_Enum.Accessoire,
    }).valueChanges;
  }

  //Get just the Consumables in a draft (order or quotation)

  getDraftConsumables(draft_id) {
    return this.getProductsByTypeGQL.watch({
      draft_id,
      type: Sales_Product_Type_Enum.Consommable,
    }).valueChanges;
  }

  //add Glass to  a Draft (order or quotation )
  addGlass(createdItem: InsertedProduct) {
    return this.insertGlass.mutate(createdItem);
  }

  //add Consumable to  a Draft (order or quotation )

  addConsumable(createdItem: InsertedProduct) {
    return this.insertConsumable.mutate(createdItem);
  }

  //add Accessory to  a Draft (order or quotation )

  addAccessory(createdItem: InsertedProduct) {
    return this.insertAccessory.mutate(createdItem);
  }

  //add Service to  a Draft (order or quotation )

  addService(createdItem: InsertedProduct) {
    return this.insertService.mutate(createdItem);
  }
  removeProduct(id: string) {
    return this.deleteProduct.mutate({ id });
  }

  removeProducts(ids: string[]) {
    return this.DeleteProductsGQL.mutate({ ids });
  }
}
