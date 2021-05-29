import { InsertedDeliveryForm, DeliveryForm } from '@tanglass-erp/core/sales';

export function adaptDelivery(delivery: InsertedDeliveryForm) {
  return {
    ...delivery,
    orders: delivery.orders.map(e => ({order_id: e}))
  }
}

export function reverseAdaptDelivery(delivery: any): DeliveryForm {
  return {
    ...delivery,
    orders: delivery.orders.map(e => e.order_id)
  }
}
