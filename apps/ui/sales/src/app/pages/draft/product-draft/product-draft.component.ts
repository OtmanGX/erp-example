import { Component, OnInit, ViewChild, Input, OnChanges, OnDestroy } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from "../pop-product/pop-product.component";
import { Column, ColumnType, FieldConfig, TableComponent } from '@tanglass-erp/material';
import { ProductHeaders, ProductGlassHeaders, displayedColumns, glassesColumns } from "../../../utils/grid-headers";
import { DraftItem } from "../../../utils/models";
import { ProductDraftFacade } from "@tanglass-erp/store/sales";
import { ProductsTypes } from "../../../utils/enums";
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss']
})

export class ProductDraftComponent implements OnInit, OnDestroy {
  isCardMode: string;
  @ViewChild('glassTable') glassTable: TableComponent<DraftItem>;
  @ViewChild('articlesTable', {read: TableComponent, static: false}) articlesTable: TableComponent<DraftItem>;
  displayedColumns: Array<Column> =
    [
      ...displayedColumns.map((e) => ({
        title: e[0].toUpperCase() + e.slice(1),
        type: ColumnType.normal,
        key: e,
      })),
      {
        title: 'Action',
        key: 'action',
        type: ColumnType.template,
        withRow: true,
      },
    ];
  glassesColumns =
    [
      ...glassesColumns.map((e) => ({
        title: e[0].toUpperCase() + e.slice(1),
        type: ColumnType.normal,
        key: e,
      })),
      {
        title: 'Action',
        key: 'action',
        type: ColumnType.template,
        withRow: true,
      },
    ];
  dataSourceGlass = [];
  dataSourceArticles = [];
  glassHeaders = ProductGlassHeaders;
  headers = ProductHeaders
  regConfig: FieldConfig[];
  products$ = this.facade.allProduct$;
  companies$ = this.sharedfacade.allShortCompany$.pipe(map(item => item.map(company => ({ key: company.id, value: company.name }))));
  warehouses$ = this.sharedfacade.allShortWarehouse$.pipe(map(item => item.map(warehouse => ({ key: warehouse.id, value: warehouse.name, company_id: warehouse.companyid }))));
  productsSub: Subscription;
  companiesSub: Subscription;
  warehousesSub: Subscription;
  @ViewChild(MatTable, { static: true }) table: MatTable<DraftItem>;
  @Input() draft_id;
  constructor(
    public dialog: MatDialog,
    private facade: ProductDraftFacade,
    private sharedfacade: SharedFacade,

  ) { }
  ngOnInit(): void {
    this.sharedfacade.loadAllShortCompanies()
    this.sharedfacade.loadAllShortWarehouses()
  }

  ngOnChanges() {
    this.facade.loadAllProducts(this.draft_id[0]?.id);
    this.productsSub = this.products$.subscribe(
      items => {
        this.facade.updateAmounts()
        this.dataSourceGlass = items.filter(item => item.type == ProductsTypes.glass);
        this.dataSourceArticles = items.filter(item => item.type !== ProductsTypes.glass);
      }
    )
  }

  openDialog(action, product_type: string, row?: DraftItem) {
    let companies; let warehouses
    this.companiesSub = this.companies$.subscribe(val => companies = val)
    this.warehousesSub = this.warehouses$.subscribe(val => warehouses = val)
    const dialogRef = this.dialog.open(PopProductComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: { product_type, row, companies, warehouses }
    });
    dialogRef.afterClosed().subscribe(result => {
      switch (result?.type) {
        case ProductsTypes.glass: {
          this.facade.addGlass({ ...result, draft_id: this.draft_id[0]?.id })
          break;
        }
        case ProductsTypes.accessory: {
          this.facade.addAccessory({ ...result, draft_id: this.draft_id[0]?.id })
          break;
        }
        case ProductsTypes.service: {
          this.facade.addService({ ...result, draft_id: this.draft_id[0]?.id })
          break;
        }
        case ProductsTypes.consumable: {
          this.facade.addConsumable({ ...result, draft_id: this.draft_id[0]?.id })
          break;
        }
        case ProductsTypes.customerPorduct: {
          this.facade.addCustomerProduct({ ...result, draft_id: this.draft_id[0]?.id })
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
  delete(item: DraftItem) {
    // this.facade.removeProduct(item.id);
    // this.articlesTable.render();
    // this.glassTable.render();
  }

  deleteArticle(item: any) {
    this.facade.removeProduct(item.id);
    this.dataSourceArticles.splice(item , 1);
    this.articlesTable.render()
  }
  deleteGlass(item: any) {
    this.facade.removeProduct(item.id);
    this.dataSourceGlass.splice(item , 1);
    this.glassTable.render()
  }
  ngOnDestroy() {
    this.productsSub?.unsubscribe();
    this.warehousesSub?.unsubscribe();
    this.companiesSub?.unsubscribe()
  }
}