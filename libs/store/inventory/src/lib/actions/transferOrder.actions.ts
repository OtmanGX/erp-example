import { createAction, props } from '@ngrx/store';
import {
  TransferOrder,
  DetailedTransferOrder,
  InsertedTransferOrder,
  OrderDetails,
  OrderItem, Transfered
} from '@tanglass-erp/core/inventory';
import { RequireExactlyOne } from '@tanglass-erp/core/common';

export const loadTransferOrders = createAction('[TransferOrders] Load TransferOrders');

export const loadTransferOrdersSuccess = createAction(
  '[TransferOrders] Load TransferOrders Success',
  props<{ transferOrders: TransferOrder[] }>()
);

export const loadTransferOrdersFailure = createAction(
  '[TransferOrders] Load TransferOrders Failure',
  props<{ error: any }>()
);


// *** Load By Id ***
export const loadTransferOrderById = createAction(
  '[TransferOrders] Load TransferOrder By Id',
  props<{ id: any }>());

export const loadTransferOrderByIdSuccess = createAction(
  '[TransferOrders] Load TransferOrder By Id Success',
  props<{ transferOrder: DetailedTransferOrder }>()
);

export const loadTransferOrderByIdFailure = createAction(
  '[TransferOrders] Load TransferOrder By Id Failure',
  props<{ error: any}>()
);


// *** Add ***
export const addTransferOrder = createAction(
  '[TransferOrders] Add TransferOrder',
  props<{ TransferOrder: InsertedTransferOrder }>()
);

export const addTransferOrderSuccess = createAction(
  '[TransferOrders] Add TransferOrder Success',
  props<{ TransferOrder: TransferOrder }>()
);

export const addTransferOrderFailure = createAction(
  '[TransferOrders] Add TransferOrder Failure',
  props<{ error: any}>()
);


// *** Update ***
export const updateTransferOrder = createAction(
  '[TransferOrders] Update TransferOrder',
  props<{ transferOrder: RequireExactlyOne<InsertedTransferOrder, 'id'> }>()
);

export const updateTransferOrderSuccess = createAction(
  '[TransferOrders] Update TransferOrder Success',
  props<{ transferOrder: TransferOrder}>()
);

export const updateTransferOrderFailure = createAction(
  '[TransferOrders] Update TransferOrder Failure',
  props<{ error: any}>()
);


// *** load details ***
export const loadOrdersDetails = createAction(
  '[TransferOrders] load TransferOrder details'
);

export const loadOrdersDetailsSuccess = createAction(
  '[TransferOrders] load TransferOrder details Success',
  props<{ transferOrders: OrderDetails[] }>()
);

export const loadOrdersDetailsFailure = createAction(
  '[TransferOrders] load TransferOrder details Failure',
  props<{ error: any}>()
);


// *** Delete ***
export const deleteTransferOrder = createAction(
  '[TransferOrders] Delete TransferOrder',
  props<{ ids: number[] }>()
);

export const deleteTransferOrderSuccess = createAction(
  '[TransferOrders] Delete TransferOrder Success',
  props<{ ids: number[] }>()
);

export const deleteTransferOrderFailure = createAction(
  '[TransferOrders] Delete TransferOrder Failure',
  props<{ error: any}>()
);


// *** Update OrderItem ***
export const updateOrderItem = createAction(
  '[TransferOrders] Update OrderItem',
  props<{ orderItem: RequireExactlyOne<OrderItem, 'id'> }>()
);

export const updateOrderItemSuccess = createAction(
  '[TransferOrders] Update OrderItem Success',
  props<{ transferOrder: DetailedTransferOrder }>()
);

export const updateOrderItemFailure = createAction(
  '[TransferOrders] Update OrderItem Failure',
  props<{ error: any}>()
);


// *** Update itemTranfer ***
export const updateItemTransfer = createAction(
  '[TransferOrders] Update itemTranfer',
  props<{ transferred: RequireExactlyOne<Transfered, 'id'> }>()
);

export const updateItemTransferSuccess = createAction(
  '[TransferOrders] Update itemTranfer Success',
  props<{ transferOrder: DetailedTransferOrder }>()
);

export const updateItemTransferFailure = createAction(
  '[TransferOrders] Update itemTranfer Failure',
  props<{ error: any}>()
);


