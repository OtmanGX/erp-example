import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from '@TanglassUi/sales/components/pop-product/pop-product.component';
import { Column, FieldConfig, TableComponent } from '@tanglass-erp/material';
import {
  ProductHeaders,
  ProductGlassHeaders,
} from '@TanglassUi/sales/utils/grid-headers';
import { Product } from '@TanglassUi/sales/utils/models';
import {
  ProductDraftFacade,
  Sales_Product_Type_Enum,
  DraftFacade,
  Product_draft,
} from '@tanglass-erp/store/sales';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { PopRemovingComponent } from '@TanglassUi/sales/components/pop-remove-dependencies/pop-removing.component';
import { PopRepairComponent } from '@TanglassUi/sales/components/pop-repair-product/pop-repair.component';
@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss'],
})
export class ProductDraftComponent implements OnInit, OnDestroy {
  @ViewChild('glassTable') glassTable: TableComponent<Product>;
  @ViewChild('articlesTable', { read: TableComponent, static: false })
  articlesTable: TableComponent<Product>;
  displayedColumns: Array<Column> = ProductHeaders;
  glassesColumns: Array<Column> = ProductGlassHeaders;
  dataSourceGlass = [];
  dataSourceArticles = [];
  regConfig: FieldConfig[];
  draft_id;
  companies$ = this.sharedfacade.allShortCompany$.pipe(
    map((item) =>
      item.map((company) => ({ key: company.id, value: company.name }))
    )
  );
  warehouses$ = this.sharedfacade.allShortWarehouse$.pipe(
    map((item) =>
      item.map((warehouse) => ({
        key: warehouse.id,
        value: warehouse.name,
        company_id: warehouse.companyid,
      }))
    )
  );
  productsSub: Subscription;
  companiesSub: Subscription;
  warehousesSub: Subscription;
  @ViewChild(MatTable, { static: true }) table: MatTable<Product>;
  @Input() isCardMode: boolean = false;
  @Input() isLaunched: boolean;
  constructor(
    public dialog: MatDialog,
    private facade: ProductDraftFacade,
    private sharedfacade: SharedFacade,
    private draft_facade: DraftFacade
  ) {}
  ngOnInit(): void {
    this.draft_facade.selectedDraft$.subscribe((id) => (this.draft_id = id));
    this.productsSub = this.facade.getProductsGroups().subscribe((items) => {
      this.facade.updateAmounts();
      this.dataSourceGlass = items.glasses;
      this.dataSourceArticles = items.articles;
    });
  }
  openDialog(action, product_type: string, row?: Product): void {
    let companies;
    let warehouses;
    this.companiesSub = this.companies$.subscribe((val) => (companies = val));
    this.warehousesSub = this.warehouses$.subscribe(
      (val) => (warehouses = val)
    );
    const dialogRef = this.dialog.open(PopProductComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: { product_type, row, companies, warehouses },
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (result?.type) {
        case Sales_Product_Type_Enum.Verre: {
          this.facade.addGlass({ ...result, draft_id: this.draft_id });
          break;
        }
        case Sales_Product_Type_Enum.ArticleClient: {
          this.facade.addCustomerProduct({
            ...result,
            draft_id: this.draft_id,
          });
          break;
        }
        case Sales_Product_Type_Enum.Accessoire: {
          this.facade.addAccessory({ ...result, draft_id: this.draft_id });
          break;
        }
        case Sales_Product_Type_Enum.Service: {
          this.facade.addService({ ...result, draft_id: this.draft_id });
          break;
        }
        case Sales_Product_Type_Enum.Consommable: {
          this.facade.addConsumable({ ...result, draft_id: this.draft_id });
          break;
        }
        default: {
          break;
        }
      }
    });
    this.articlesTable.render();
    this.glassTable.render();
  }
  delete(item: Product_draft): void {
    this.facade.removeProduct(item.id, item?.glass_draft?.id);
    this.articlesTable.render();
    this.glassTable.render();
    this.facade.updateAmounts();
  }
  deleteDependencies(row: Product_draft): void {
    const dialogRef = this.dialog.open(PopRemovingComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: row,
    });
  }
  addRepair(row: Product_draft): void {
    const dialogRef = this.dialog.open(PopRepairComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: row,
    });
  }
  ngOnDestroy(): void {
    this.productsSub?.unsubscribe();
    this.warehousesSub?.unsubscribe();
    this.companiesSub?.unsubscribe();
  }
}
