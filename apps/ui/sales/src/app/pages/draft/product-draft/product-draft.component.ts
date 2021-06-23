import { Component, OnInit, ViewChild, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from "../pop-product/pop-product.component";
import { Column, ColumnType, FieldConfig, TableComponent } from '@tanglass-erp/material';
import { ProductHeaders, ProductGlassHeaders, action } from "../../../utils/grid-headers";
import { DraftItem } from "../../../utils/models";
import { ProductDraftFacade } from "@tanglass-erp/store/sales";
import { ProductsTypes } from "../../../utils/enums";
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { OrdersFacade, DraftFacade } from "@tanglass-erp/store/sales";
@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss']
})
export class ProductDraftComponent implements OnInit, OnDestroy, OnChanges {
  @ViewChild('glassTable') glassTable: TableComponent<DraftItem>;
  @ViewChild('articlesTable', { read: TableComponent, static: false }) articlesTable: TableComponent<DraftItem>;
  displayedColumns: Array<Column> = ProductHeaders
  glassesColumns: Array<Column> = ProductGlassHeaders
  dataSourceGlass = [];
  dataSourceArticles = [];
  regConfig: FieldConfig[];
  draft_id;
  companies$ = this.sharedfacade.allShortCompany$.pipe(map(item => item.map(company => ({ key: company.id, value: company.name }))));
  warehouses$ = this.sharedfacade.allShortWarehouse$.pipe(map(item => item.map(warehouse => ({ key: warehouse.id, value: warehouse.name, company_id: warehouse.companyid }))));
  productsSub: Subscription;
  companiesSub: Subscription;
  warehousesSub: Subscription;
  @ViewChild(MatTable, { static: true }) table: MatTable<DraftItem>;
  @Input() isCardMode: boolean = false;
  constructor(
    public dialog: MatDialog,
    private facade: ProductDraftFacade,
    private sharedfacade: SharedFacade,
    private draft_facade: DraftFacade,
  ) { }
  ngOnInit(): void {
    this.draft_facade.selectedDraft$.subscribe(
      id => { 
        console.log('id',id)
        this.draft_id = id; 
        this.facade.loadSelectedProducts(this.draft_id) }
    )
    this.productsSub = this.facade.selectedProducts$.subscribe(
      items => {
        this.facade.updateAmounts()
        this.dataSourceGlass = items.filter(item => item.type == ProductsTypes.glass || item.type == ProductsTypes.customerPorduct);
        this.dataSourceArticles = items.filter(item => item.type !== ProductsTypes.glass && item.type !== ProductsTypes.customerPorduct);
      }
    )
  }
  ngOnChanges() {
    if (!this.isCardMode) {
      this.sharedfacade.loadAllShortCompanies()
      this.sharedfacade.loadAllShortWarehouses()
    };
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
          this.facade.addGlass({ ...result, draft_id: this.draft_id })
          break;
        }
        case ProductsTypes.customerPorduct: {
          this.facade.addGlass({ ...result, draft_id: this.draft_id })
          break;
        }
        case ProductsTypes.accessory: {
          this.facade.addAccessory({ ...result, draft_id: this.draft_id })
          break;
        }
        case ProductsTypes.service: {
          this.facade.addService({ ...result, draft_id: this.draft_id })
          break;
        }
        case ProductsTypes.consumable: {
          this.facade.addConsumable({ ...result, draft_id: this.draft_id })
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
    this.facade.removeProduct(item.id);
    this.articlesTable.render();
    this.glassTable.render();
    this.facade.updateAmounts();
  }
  ngOnDestroy() {
    this.productsSub?.unsubscribe();
    this.warehousesSub?.unsubscribe();
    this.companiesSub?.unsubscribe()
  }
}