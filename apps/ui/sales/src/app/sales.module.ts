import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from '@TanglassUi/sales/sales-routing.module';
import { SalesComponent } from '@TanglassUi/sales/sales.component';
import { DraftComponent } from '@TanglassUi/sales/pages/draft/draft.component';
import { CreateDraftComponent } from '@TanglassUi/sales/components/create-draft/create-draft.component';
import { ProductDraftComponent } from '@TanglassUi/sales/components/product-draft/product-draft.component';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { MaterialModule } from '@tanglass-erp/material';
import { StoreSharedModule } from '@tanglass-erp/store/shared';
import { PopProductComponent } from '@TanglassUi/sales/components/pop-product/pop-product.component';
import { StoreProductModule } from '@TanglassStore/product/index';
import { StoreSalesModule } from '@tanglass-erp/store/sales';
import { StoreContactModule } from '@TanglassStore/contact/index';
import { QuotationComponent } from '@TanglassUi/sales/pages/quotation/quotation.component';
import { OrderComponent } from '@TanglassUi/sales/pages/order/order.component';
import { CreateQuotationComponent } from '@TanglassUi/sales/pages/quotation/create-quotation/create-quotation.component';
import { CreateOrderComponent } from '@TanglassUi/sales/pages/order/create-order/create-order.component';
import { AmountsOrderComponent } from '@TanglassUi/sales/components/amounts-order/amounts-order.component';
import { DeliveryListComponent } from '@TanglassUi/sales/pages/delivery/delivery-list/delivery-list.component';
import { DeliveryAddComponent } from '@TanglassUi/sales/pages/delivery/delivery-add/delivery-add.component';
import { DeliveryLineComponent } from '@TanglassUi/sales/components/delivery-line/delivery-line.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OrderCardComponent } from '@TanglassUi/sales/pages/order/order-card/order-card.component';
import { InvoiceListComponent } from '@TanglassUi/sales/pages/invoice/invoice-list/invoice-list.component';
import { InvoiceAddComponent } from '@TanglassUi/sales/pages/invoice/invoice-add/invoice-add.component';
import { InvoiceReadyComponent } from '@TanglassUi/sales/pages/invoice/invoice-ready/invoice-ready.component';
import { DeliveriesAccordionComponent } from '@TanglassUi/sales/components/deliveries-accordion/deliveries-accordion.component';
import { PopPaymentComponent } from '@TanglassUi/sales/components/payments-order/pop-payement/pop-payment.component';
import { ManagementStateModule } from '@TanglassStore/management/lib/management-state.module';
import { PaymentsComponent } from '@TanglassUi/sales/components/payments-order/payments.component';
import { QuotationCardComponent } from '@TanglassUi/sales/pages/quotation/quotation-card/quotation-card.component';
import { PopRemovingComponent } from '@TanglassUi/sales/components/pop-remove-dependencies/pop-removing.component';
import { PopRepairComponent } from '@TanglassUi/sales/components/pop-repair-product/pop-repair.component';
import { OrderDeliveriesComponent } from '@TanglassUi/sales/components/order-deliveries/order-deliveries.component';
import { PopQuotationTransferComponent } from '@TanglassUi/sales/components/pop-quotation-transfer/pop-quotation-transfer.component';
@NgModule({
  declarations: [
    SalesComponent,
    DraftComponent,
    CreateDraftComponent,
    ProductDraftComponent,
    PopProductComponent,
    QuotationComponent,
    OrderComponent,
    CreateOrderComponent,
    CreateQuotationComponent,
    AmountsOrderComponent,
    DeliveryListComponent,
    DeliveryAddComponent,
    DeliveryLineComponent,
    OrderCardComponent,
    InvoiceListComponent,
    InvoiceAddComponent,
    InvoiceReadyComponent,
    DeliveriesAccordionComponent,
    PopPaymentComponent,
    PaymentsComponent,
    QuotationCardComponent,
    PopRemovingComponent,
    PopRepairComponent,
    OrderDeliveriesComponent,
    PopQuotationTransferComponent,
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule,
    MainAgGridModule,
    StoreSharedModule,
    StoreProductModule,
    StoreContactModule,
    StoreSalesModule,
    ManagementStateModule,
    MatSlideToggleModule,
  ],
})
export class SalesModule {}
