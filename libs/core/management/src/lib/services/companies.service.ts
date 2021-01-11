import { Injectable } from '@angular/core';
import {
  GetAllCompaniesGQL,
  GetCompanyByIdGQL,
  InsertCompanyGQL,
  InsertCompanyMutationVariables,
  UpdateCompanyGQL,
  UpdateCompanyMutationVariables,
  DeleteCompanyGQL,

} from '@tanglass-erp/infrastructure/graphql';

import { Companie, DetailedCompanie } from "../models/companies.models";
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {


  constructor(
    private getAllGQL: GetAllCompaniesGQL,
    private getByIdGQL: GetCompanyByIdGQL,
    private insertOneGQL: InsertCompanyGQL,
    private updateOneGQL: UpdateCompanyGQL,
    private deleteOneGQL: DeleteCompanyGQL,

  ) {
    this.getOneById('8a8999db-1ada-4979-8ef7-d79d7871cd5b').subscribe(obj => { let data: DetailedCompanie = obj.data.management_Company_by_pk; console.log(obj.data.management_Company_by_pk) });
    this.getAll().subscribe(obj =>{let data: Companie[]=obj.data.management_Company;console.log(obj.data.management_Company)} );
    this.insertOne({CNSS:"tefgdbst",ICE:"tfdgbfgest",IF:"IfghbfF",RC:"RdfgbC",address:"testcgbf",name:"namefgb",phone:"phoneghb"}).subscribe(obj =>{let data: Companie=obj.data.insert_management_Company_one;console.log(obj.data.insert_management_Company_one)} );
    this.updateOne({id:"8a8999db-1ada-4979-8ef7-d79d7871cd5b",CNSS:"te452date",ICE:"testg452hnghjg",IF:"I542Fn",RC:"RCgg452n",address:"test",name:"tesate",phone:"phhn"}).subscribe(obj =>{let data: Companie=obj.data.update_management_Company_by_pk;console.log(obj.data.update_management_Company_by_pk)} );

  }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdOne: InsertCompanyMutationVariables) {
    return this.insertOneGQL.mutate(createdOne)

  }
  updateOne(updatedOne: UpdateCompanyMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({ id })
  }

}