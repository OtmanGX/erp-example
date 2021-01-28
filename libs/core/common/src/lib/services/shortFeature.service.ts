import { Injectable } from '@angular/core';
import {
  GetShortCompaniesGQL,

} from '@tanglass-erp/infrastructure/graphql';
@Injectable({
  providedIn: 'root'
})
export class ShortFeatureService {


  constructor(
    private getShortCompaniesGQL: GetShortCompaniesGQL
  ) { }


  getAll() {
    return this.getShortCompaniesGQL.watch().valueChanges
  }




}
