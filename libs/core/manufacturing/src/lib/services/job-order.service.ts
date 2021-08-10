import { Injectable } from '@angular/core';
import {
  GetAllJobsOrdersGQL,
  InsertJobOrderGQL,
  GetJobOrderByIdGQL,
  GenerateBarCodesGQL,
} from '@tanglass-erp/infrastructure/graphql';
import {
  InsertedJobOrder,
  InsertedManufacturingLine,
  ManufacturingLine
} from '@tanglass-erp/core/manufacturing';
import { map } from 'rxjs/operators';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root',
})
export class JobOrderService {
  constructor(
    private getAllJobOrdersGQL: GetAllJobsOrdersGQL,
    private InsertJobOrderGQL: InsertJobOrderGQL,
    private getJobOrderByIdGQL: GetJobOrderByIdGQL,
    private GenerateBarCodesGQL: GenerateBarCodesGQL
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

  generateManufacturingLines(linesParams: InsertedManufacturingLine[]):Observable<ManufacturingLine[] >{
    let lines = [];
    linesParams.map((e) => {
      for (let i = 0; i < e.count; i++) {
        lines.push({
          glass_id: e.glass_id,
        });
      }
    });
    return this.GenerateBarCodesGQL.mutate({ objects: lines }).pipe(
      map((data) =>
        data.data.insert_manufacturing_manufacturing_line.returning.map(
          (line) => ({
            ...line,
            manufacturing_services: line.manufacturing_services.map(
              (data) => data.service_draft.labelFactory
            ),
            manufacturing_consumables: line.manufacturing_consumables.map(
              (data) => data.consumable_draft.labelFactory
            ),
          })
        )
      )
    );
  }
}
