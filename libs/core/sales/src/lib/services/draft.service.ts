import { Injectable } from '@angular/core';
import {
  DeleteDraftsGQL,
  DeleteProductDraftGQL,
  DeleteProductsGQL,
  GetAllDraftsGQL,
  GetDraftByIdGQL,
  GetProductsByTypeGQL,
  InsertAccessoryDraftGQL,
  InsertConsumableDraftGQL,
  InsertDraftGQL,
  InsertGlassDraftGQL,
  InsertManyGlassesGQL,
  InsertServiceDraftGQL,
  Sales_Product_Type_Enum,
  Sales_Service_Draft_Insert_Input,
  InsertManyServicesGQL,
  InsertManyConsumablesGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedProduct, Product_sale } from '@tanglass-erp/core/sales';
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
    private DeleteProductsGQL: DeleteProductsGQL,
    private insertManyGlassesGQL: InsertManyGlassesGQL,
    private insertManyServicesGQL: InsertManyServicesGQL,
    private insertManyConsumablesGQL: InsertManyConsumablesGQL
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

  //add Many Glasses to  a Draft (order or quotation )
  addManyGlasses(createdItems: Product_sale[]) {
    return this.insertManyGlassesGQL.mutate({
      glasses: createdItems.map((item) => ({ product_draft: { data: item } })),
    });
  }
  addManyServices(createdItems: Product_sale[]) {
    return this.insertManyServicesGQL.mutate({
      services: createdItems.map((product) => {
        let { dependent_id, labelFactory, ...data } = product;
        return {
          dependent_id: product?.dependent_id,
          labelFactory: product?.labelFactory,
          product_draft: { data },
        };
      }),
    });
  }

  addManyConsumables(createdItems: Product_sale[]) {
    return this.insertManyConsumablesGQL.mutate({
      consumables: createdItems.map((product) => {
        let { dependent_id, labelFactory, ...data } = product;
        return {
          dependent_id: product?.dependent_id,
          labelFactory: product?.labelFactory,
          product_draft: { data },
        };
      }),
    });
  }
  //add Consumable to  a Draft (order or quotation )
  addConsumable(createdItem: InsertedProduct) {
    return this.insertConsumable.mutate(createdItem);
  }

  //add Accessory to  a Draft (order or quotation )
  addAccessory(createdItem: InsertedProduct) {
    return this.insertAccessory.mutate(createdItem);
  }
  //add Many Accessories  to  a Draft (order or quotation )
  addManyAccessories(createdItem: InsertedProduct) {
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
