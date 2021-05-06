import { QuotationEntity } from './quotation.models';
import * as QuotationActions from './quotation.actions';
import { State, initialState, reducer } from './quotation.reducer';

describe('Quotation Reducer', () => {
  const createQuotationEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as QuotationEntity);

  beforeEach(() => {});

  describe('valid Quotation actions', () => {
    it('loadQuotationSuccess should return set the list of known Quotation', () => {
      const quotation = [
        createQuotationEntity('PRODUCT-AAA'),
        createQuotationEntity('PRODUCT-zzz'),
      ];
      const action = QuotationActions.loadQuotationSuccess({ quotation });

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
