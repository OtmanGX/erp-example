import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { JobOrdersEntity } from './job-orders.models';
import { JobOrdersEffects } from './job-orders.effects';
import { JobOrdersFacade } from './job-orders.facade';

import * as JobOrdersSelectors from './job-orders.selectors';
import * as JobOrdersActions from './job-orders.actions';
import {
  JOB_ORDERS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './job-orders.reducer';

interface TestSchema {
  jobOrders: State;
}

describe('JobOrdersFacade', () => {
  let facade: JobOrdersFacade;
  let store: Store<TestSchema>;
  const createJobOrdersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as JobOrdersEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(JOB_ORDERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([JobOrdersEffects]),
        ],
        providers: [JobOrdersFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(JobOrdersFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allJobOrders$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(JobOrdersActions.loadJobOrders());

        list = await readFirst(facade.allJobOrders$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadJobOrdersSuccess` to manually update list
     */
    it('allJobOrders$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allJobOrders$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          JobOrdersActions.loadJobOrdersSuccess({
            jobOrders: [
              createJobOrdersEntity('AAA'),
              createJobOrdersEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allJobOrders$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
