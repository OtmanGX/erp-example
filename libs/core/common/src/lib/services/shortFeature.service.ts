import { Injectable } from '@angular/core';
import { flattenObj } from "../utils/flatteningAdapter";
import {
  GetShortCompaniesGQL,
  GeShortSalePointsGQL,
  GetShortWArehousesGQL,
  GetProductsGQL,
  GetAccessoriesSubstancesGQL,
  GetGlassesSubstancesGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
import { Substance } from '../models/substance';
import { Observable } from "rxjs";
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


  ) { }


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


  getGlassesSubstances(id: string) {
    return this.getGlassesSubstancesGQL.fetch({ id }).pipe(map((data) =>
      data.data.stock_warehouse_substance.map((obj) => flattenObj(obj)  as Substance)
    ))
  }


}
