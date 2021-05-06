import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { QuotationEntity } from './quotation.models';
import { QuotationEffects } from './quotation.effects';
import { QuotationFacade } from './quotation.facade';

import * as QuotationSelectors from './quotation.selectors';
import * as QuotationActions from './quotation.actions';
import {
  QUOTATION_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './quotation.reducer';

interface TestSchema {
  quotation: State;
}

describe('QuotationFacade', () => {
  let facade: QuotationFacade;
  let store: Store<TestSchema>;
  const createQuotationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuotationEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(QUOTATION_FEATURE_KEY, reducer),
          EffectsModule.forFeature([QuotationEffects]),
        ],
        providers: [QuotationFacade],
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
      facade = TestBed.get(QuotationFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allQuotation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(QuotationActions.loadQuotation());

        list = await readFirst(facade.allQuotation$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadQuotationSuccess` to manually update list
     */
    it('allQuotation$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allQuotation$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          QuotationActions.loadQuotationSuccess({
            quotation: [
              createQuotationEntity('AAA'),
              createQuotationEntity('BBB'),
            ],
          })
        );

        list = await readFirst(facade.allQuotation$);
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
