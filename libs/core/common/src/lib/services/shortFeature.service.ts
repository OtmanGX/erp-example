import { Injectable } from '@angular/core';
import { flattenObj } from "../utils/flatteningAdapter";
import {
  GetShortCompaniesGQL,
  GeShortSalePointsGQL,
  GetShortWArehousesGQL,
  GetProductsGQL,
  GetAccessoriesSubstancesGQL,
  GetGlassesSubstancesGQL,
  GetShortSubstancesGQL,
  GetShortProvidersGQL
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { Substance, ShortSubstance, } from '../models/substance';
import { ShortProvider } from '../models/shortFeature.models';

@Injectable({
  providedIn: 'root'
})
export class ShortFeatureService {


  constructor(
    private getShortCompaniesGQL: GetShortCompaniesGQL,
    private getShortSalePointsGQL: GeShortSalePointsGQL,
    private getShortWArehousesGQL: GetShortWArehousesGQL,
    private getProductsGQL: GetProductsGQL,
    private getAccessoriesSubstancesGQL: GetAccessoriesSubstancesGQL,
    private getGlassesSubstancesGQL: GetGlassesSubstancesGQL,
    private getShortSubstancesGQL: GetShortSubstancesGQL,
    private getShortProvidersGQL: GetShortProvidersGQL,

  ) {
    let data:ShortProvider[]
    this.getShortProviders().subscribe(o=>data=o.data.contact_provider)
   }


  getAllCompanies() {
    return this.getShortCompaniesGQL.watch().valueChanges
  }


  getAllSalePoints() {
    return this.getShortSalePointsGQL.watch().valueChanges

  }

  getAllWarehouses() {
    return this.getShortWArehousesGQL.watch().valueChanges

  }
  getProducts() {
    return this.getProductsGQL.watch().valueChanges
  }
  getAccessoriesSubstances(id: string) {
    return this.getAccessoriesSubstancesGQL.fetch({ id }).pipe(map((data) =>
      data.data.stock_warehouse_substance.map((obj) => flattenObj(obj) as Substance)
    ))
  }

  getShortSubstance() {
    return this.getShortSubstancesGQL.watch().valueChanges.pipe(map((data) =>
      data.data.product_product.map((obj) => flattenObj(obj) as ShortSubstance)
    ))
  }

  getGlassesSubstances(id: string) {
    return this.getGlassesSubstancesGQL.fetch({ id }).pipe(map((data) =>
      data.data.stock_warehouse_substance.map((obj) => flattenObj(obj) as Substance)
    ))
  }

  getShortProviders() {
    return this.getShortProvidersGQL.watch().valueChanges
  }
}
