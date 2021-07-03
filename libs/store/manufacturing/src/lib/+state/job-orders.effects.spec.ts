import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { JobOrdersEffects } from './job-orders.effects';
import * as JobOrdersActions from './job-orders.actions';

describe('JobOrdersEffects', () => {
  let actions: Observable<any>;
  let effects: JobOrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        JobOrdersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(JobOrdersEffects);
  });

  describe('loadJobOrders$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: JobOrdersActions.loadJobOrders() });

      const expected = hot('-a-|', {
        a: JobOrdersActions.loadJobOrdersSuccess({ jobOrders: [] }),
      });

      expect(effects.loadJobOrders$).toBeObservable(expected);
    });
  });
});
