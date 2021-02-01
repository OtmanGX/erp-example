import { Injectable } from '@angular/core';
import {
  GetShortCompaniesGQL,
  GeShortSalePointsGQL,
  GetShortWArehousesGQL,
  GetProductsGQL,
} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ShortFeatureService {


  constructor(
    private getShortCompaniesGQL: GetShortCompaniesGQL,
    private getShortSalePointsGQL: GeShortSalePointsGQL,
    private getShortWArehousesGQL: GetShortWArehousesGQL,
    private getProductsGQL: GetProductsGQL,

  ) { }


  getAllCompanies() {
    return this.getShortCompaniesGQL.watch().valueChanges
  }


  getAllSalePoints(){
    return this.getShortSalePointsGQL.watch().valueChanges

  }

  getAllWarehouses(){
    return this.getShortWArehousesGQL.watch().valueChanges

  }
  getProducts(){
    return this.getProductsGQL.watch().valueChanges


  }

}
