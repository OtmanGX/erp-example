import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRoutingModule } from './sales-routing.module';
import { SalesComponent } from './sales.component';
import { DraftComponent } from './pages/draft/draft.component';
import { CreateDraftComponent } from './pages/draft/create-draft/create-draft.component';
import { ProductDraftComponent } from "./pages/draft/product-draft/product-draft.component";
import { MainAgGridModule } from '@tanglass-erp/ag-grid';
import { MaterialModule } from "@tanglass-erp/material";
import { StoreSharedModule} from "@tanglass-erp/store/shared";
import { PopProductComponent } from "./pages/draft/pop-product/pop-product.component";
import { StoreProductModule } from '@TanglassStore/product/index';
import { StoreSalesModule } from '@tanglass-erp/store/sales';
import { StoreContactModule } from '@TanglassStore/contact/index';
import { QuotationComponent } from './pages/quotation/quotation.component';
import { OrderComponent } from './pages/order/order.component';
import { CreateQuotationComponent } from './pages/quotation/create-quotation/create-quotation.component';
import { CreateOrderComponent } from "./pages/order/create-order/create-order.component";
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
    CreateQuotationComponent],
  imports: [
    CommonModule,
    SalesRoutingModule,
    MaterialModule,
    MainAgGridModule,
    StoreSharedModule,
    StoreProductModule,
    StoreContactModule,
    StoreSalesModule
  ]
})
export class SalesModule { }
