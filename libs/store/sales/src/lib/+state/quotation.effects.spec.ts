import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { QuotationEffects } from './quotation.effects';
import * as QuotationActions from './quotation.actions';

describe('QuotationEffects', () => {
  let actions: Observable<any>;
  let effects: QuotationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        QuotationEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(QuotationEffects);
  });

  describe('loadQuotation$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: QuotationActions.loadQuotation() });

      const expected = hot('-a-|', {
        a: QuotationActions.loadQuotationSuccess({ quotation: [] }),
      });

      expect(effects.loadQuotation$).toBeObservable(expected);
    });
  });
});
