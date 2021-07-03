import { JobOrdersEntity } from './job-orders.models';
import { State, jobOrdersAdapter, initialState } from './job-orders.reducer';
import * as JobOrdersSelectors from './job-orders.selectors';

describe('JobOrders Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getJobOrdersId = (it) => it['id'];
  const createJobOrdersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as JobOrdersEntity);

  let state;

  beforeEach(() => {
    state = {
      jobOrders: jobOrdersAdapter.setAll(
        [
          createJobOrdersEntity('PRODUCT-AAA'),
          createJobOrdersEntity('PRODUCT-BBB'),
          createJobOrdersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('JobOrders Selectors', () => {
    it('getAllJobOrders() should return the list of JobOrders', () => {
      const results = JobOrdersSelectors.getAllJobOrders(state);
      const selId = getJobOrdersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = JobOrdersSelectors.getSelected(state);
      const selId = getJobOrdersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getJobOrdersLoaded() should return the current 'loaded' status", () => {
      const result = JobOrdersSelectors.getJobOrdersLoaded(state);

      expect(result).toBe(true);
    });

    it("getJobOrdersError() should return the current 'error' state", () => {
      const result = JobOrdersSelectors.getJobOrdersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
