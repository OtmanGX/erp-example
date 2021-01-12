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

   }


  getAll() {
    return this.getAllGQL.watch().valueChanges
  }
  getOneById(id: string) {
    console.log(id);
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
