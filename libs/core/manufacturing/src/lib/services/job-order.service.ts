import { Injectable } from '@angular/core';
import {
  GetAllJobsOrdersGQL,
  InsertJobOrderGQL,
  GetJobOrderByIdGQL,
} from '@tanglass-erp/infrastructure/graphql';
import { InsertedJobOrder } from '@tanglass-erp/core/manufacturing';
@Injectable({
  providedIn: 'root',
})
export class JobOrderService {
  constructor(
    private getAllJobOrdersGQL: GetAllJobsOrdersGQL,
    private InsertJobOrderGQL: InsertJobOrderGQL,
    private getJobOrderByIdGQL: GetJobOrderByIdGQL
  ) {}

  getAll() {
    return this.getAllJobOrdersGQL.watch().valueChanges;
  }
  insertOne(jobOrder: InsertedJobOrder) {
    return this.InsertJobOrderGQL.mutate(jobOrder);
  }

  getOneById(id: number) {
    return this.getJobOrderByIdGQL.fetch({ id });
  }
}
