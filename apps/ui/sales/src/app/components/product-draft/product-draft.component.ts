import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Column, FieldConfig, TableComponent } from '@tanglass-erp/material';
import {
  ProductHeaders,
  ProductGlassHeaders,
} from '@TanglassUi/sales/utils/grid-headers';
import { Product } from '@TanglassUi/sales/utils/models';
import {
  ProductDraftFacade,
  DraftFacade,
} from '@tanglass-erp/store/sales';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { Subscription } from 'rxjs';
import { ActionsComponent } from "@TanglassUi/sales/components/product-draft/actions.component";
import { debounceTime } from 'rxjs/operators';
@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss'],
})
export class ProductDraftComponent extends ActionsComponent implements OnInit, OnDestroy  {
  @ViewChild('glassTable') glassTable: TableComponent<Product>;
  @ViewChild('articlesTable', { read: TableComponent, static: false })
  articlesTable: TableComponent<Product>;
  @ViewChild(MatTable, { static: true }) table: MatTable<Product>;
  @Input() isCardMode: boolean = false;
  @Input() isLaunched: boolean;
  displayedColumns: Array<Column> = ProductHeaders;
  glassesColumns: Array<Column> = ProductGlassHeaders;
  dataSourceGlass = [];
  dataSourceArticles = [];
  regConfig: FieldConfig[];
  draft_id;
  selectedRows: Product[];
  productsSub: Subscription;
  companiesSub: Subscription;
  warehousesSub: Subscription;
  constructor(
    public dialog: MatDialog,
    public facade: ProductDraftFacade,
    public sharedfacade: SharedFacade,
    public draft_facade: DraftFacade
  ) {
    super(dialog,facade,sharedfacade)
  }
  ngOnInit(): void {
    this.draft_facade.selectedDraftId$.pipe(debounceTime(500)).subscribe((id) => (this.draft_id = id));
    this.productsSub = this.facade.getProductsGroups().subscribe((items) => {
      this.facade.updateAmounts();
      this.dataSourceGlass = items.glasses;
      this.dataSourceArticles = items.articles;
    });
  }
  

  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
    this.warehousesSub?.unsubscribe();
    this.companiesSub?.unsubscribe();
    this.facade.clearProducts()
  }
}
