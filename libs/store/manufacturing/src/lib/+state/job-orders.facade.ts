import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';
import * as fromJobOrders from './job-orders.reducer';
import * as JobOrdersSelectors from './job-orders.selectors';
import * as JobOrdersActions from './job-orders.actions';
import {
  InsertedJobOrder,
  InsertedManufacturingLine,
  JobProduct,ManufacturingLine,ManufacturingState
} from '@tanglass-erp/core/manufacturing';
import { map } from 'rxjs/operators';
import { JobOrderGlassesAdapter,ProductionLinesAdapter } from '@tanglass-erp/store/manufacturing';
@Injectable()
export class JobOrdersFacade {
  loaded$ = this.store.pipe(select(JobOrdersSelectors.getJobOrdersLoaded));
  allJobOrders$ = this.store.pipe(select(JobOrdersSelectors.getAllJobOrders));
  selectedJobOrder$ = this.store.pipe(
    select(JobOrdersSelectors.getSelectedJobOrder)
  );
  selectedGlassLine$ = this.store.pipe(
    select(JobOrdersSelectors.getSelectedGlassLine)
  );
  selectedJobOrderGlasses$ = this.store.pipe(
    select(JobOrdersSelectors.getSelectedJobOrderGlasses)
  );
  withBarCodes$ = this.store.pipe(
    select(JobOrdersSelectors.getBarCodeState)
  );

  constructor(private store: Store<fromJobOrders.JobOrdersPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
  loadAllJobOrders() {
    this.dispatch(JobOrdersActions.loadJobOrders());
  }
  addJobOrder(jobOrder: InsertedJobOrder) {
    this.dispatch(JobOrdersActions.addJobOrder({ jobOrder }));
  }
  loadJobOrderById(id) {
    this.dispatch(JobOrdersActions.loadJobOrderById({ id }));
  }
  adaptSelectedJobOrder() {
    return this.selectedJobOrder$.pipe(
      map((jobOrder) => {
        return {
          ...jobOrder,
          items: jobOrder?.glass_drafts?.map((item) => {
            return {
              id: item.id,
              item: (
                item.product_draft.label +
                ' :  ' +
                item.service_drafts.reduce(
                  (accumulator, product) =>
                    product.labelFactory + ' + ' + accumulator,
                  ''
                ) +
                item.consumable_drafts.reduce(
                  (accumulator, product) =>
                    product.labelFactory + ' + ' + accumulator,
                  ''
                )
              ).slice(0, -2),
              count: item.product_draft.count,
              dimensions:
                item.product_draft.heigth + ' X ' + item.product_draft.width,
            };
          }),
        };
      })
    );
  }
  addManufacturingLines() {
    let manufacturingLines: InsertedManufacturingLine[] = [];
    this.selectedJobOrder$.subscribe((data) =>
      data.glass_drafts.map((data) =>
        manufacturingLines.push({
          glass_id: data.id,
          count: data.product_draft.count,
        })
      )
    );
    this.dispatch(
      JobOrdersActions.addManufacturingLines({ manufacturingLines })
    );
  }

  setSelectedGlass(glassId: string) {
    let glass;
    this.selectedJobOrderGlasses$.subscribe(
      (data) => (glass = data.find((obj) => obj.id == glassId))
    );
    this.dispatch(JobOrdersActions.selectGlassLine({ glass }));
  }

  updateGlassLine(glass: JobProduct) {
    this.dispatch(JobOrdersActions.updateGlassLine({ glass }));
  }
  updateManufacturingProgress(linesList:ManufacturingLine[]) {
    let lines=ProductionLinesAdapter(linesList);
    this.dispatch(JobOrdersActions.updateLinesStates({lines}));
  }
}
