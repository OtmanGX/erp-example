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

import {Companie, DetailedCompanie  } from "../models/companies.models";
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
   this.getOneById('8a8999db-1ada-4979-8ef7-d79d7871cd5b').subscribe(obj=>{console.log(obj.data.management_Company_by_pk)});
   
   }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string) {
    return this.getByIdGQL.fetch({ id })
  }

  insertOne(createdCompany: InsertCompanyMutationVariables) {
    return this.insertOneGQL.mutate(createdCompany)

  }
  updateOne(updatedOne: UpdateCompanyMutationVariables) {
    return this.updateOneGQL.mutate(updatedOne)
  }

  removeOne(id: string) {
    return this.deleteOneGQL.mutate({id})
  }

}