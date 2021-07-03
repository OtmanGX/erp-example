import { JobOrdersEntity } from './job-orders.models';
import * as JobOrdersActions from './job-orders.actions';
import { State, initialState, reducer } from './job-orders.reducer';

describe('JobOrders Reducer', () => {
  const createJobOrdersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as JobOrdersEntity);

  beforeEach(() => {});

  describe('valid JobOrders actions', () => {
    it('loadJobOrdersSuccess should return set the list of known JobOrders', () => {
      const jobOrders = [
        createJobOrdersEntity('PRODUCT-AAA'),
        createJobOrdersEntity('PRODUCT-zzz'),
      ];
      const action = JobOrdersActions.loadJobOrdersSuccess({ jobOrders });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
