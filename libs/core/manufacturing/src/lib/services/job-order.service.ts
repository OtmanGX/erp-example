import { Injectable } from '@angular/core';
import {
  GetAllJobsOrdersGQL,
  InsertJobOrderGQL
} from '@tanglass-erp/infrastructure/graphql';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class JobOrderService {

  constructor(
    private getAllJobOrdersGQL: GetAllJobsOrdersGQL,
    private InsertJobOrderGQL:InsertJobOrderGQL,
  ) {}

  getAll() {
    return this.getAllJobOrdersGQL.watch().valueChanges;
  }
  insertOne(jobOrder) {
    return this.InsertJobOrderGQL.mutate(jobOrder);
  }
  getOneById() {
  }
}
