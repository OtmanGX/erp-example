import { QuotationEntity } from './quotation.models';
import { State, quotationAdapter, initialState } from './quotation.reducer';
import * as QuotationSelectors from './quotation.selectors';

describe('Quotation Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getQuotationId = (it) => it['id'];
  const createQuotationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuotationEntity);

  let state;

  beforeEach(() => {
    state = {
      quotation: quotationAdapter.setAll(
        [
          createQuotationEntity('PRODUCT-AAA'),
          createQuotationEntity('PRODUCT-BBB'),
          createQuotationEntity('PRODUCT-CCC'),
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

  describe('Quotation Selectors', () => {
    it('getAllQuotation() should return the list of Quotation', () => {
      const results = QuotationSelectors.getAllQuotation(state);
      const selId = getQuotationId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = QuotationSelectors.getSelected(state);
      const selId = getQuotationId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getQuotationLoaded() should return the current 'loaded' status", () => {
      const result = QuotationSelectors.getQuotationLoaded(state);

      expect(result).toBe(true);
    });

    it("getQuotationError() should return the current 'error' state", () => {
      const result = QuotationSelectors.getQuotationError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
