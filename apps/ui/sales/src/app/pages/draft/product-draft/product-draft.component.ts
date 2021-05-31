import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from '../pop-product/pop-product.component';
import { Column, ColumnType, FieldConfig } from '@tanglass-erp/material';
import { Store } from '@ngrx/store';
import { ProductDraftHeaders } from '../../../utils/grid-headers';
import { DraftItem } from '../../../utils/models';
import { ProductDraftFacade } from '@tanglass-erp/store/sales';
import { ProductsTypes } from '../../../utils/enums';
import { TableComponent } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss'],
})
export class ProductDraftComponent implements OnInit, AfterViewInit {
  displayedColumns: Array<Column> = [
    ...[
      'product_code',
      'label',
      'count',
      'heigth',
      'width',
      'm2',
      'ml',
      'unit',
      'price',
      'total_price',
      'company_name',
    ].map((e) => ({
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

  headers = ProductDraftHeaders;
  regConfig: FieldConfig[];
  products$ = this.facade.allProduct$;

  @ViewChild('glassTable') glassTable: TableComponent<DraftItem>;
  @ViewChild('articlesTable', {read: TableComponent, static: false}) articlesTable: TableComponent<DraftItem>;
  @Input() draft_id;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private facade: ProductDraftFacade
  ) {}
  ngOnInit(): void {}

  openDialog(action, product_type: string, row?: DraftItem) {
    const dialogRef = this.dialog.open(PopProductComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: { product_type, row },
    });
    dialogRef.afterClosed().subscribe((result) => {
      switch (result?.type) {
        case ProductsTypes.glass: {
          this.dataSourceGlass.push(result);
          this.glassTable.render();
          break;
        }
        case ProductsTypes.accessory:
        case ProductsTypes.service:
        case ProductsTypes.consumable:
          this.dataSourceArticles.push(result);
          this.articlesTable.render();
          break;
        default: {
          break;
        }
      }
    });
  }

  ngAfterViewInit(): void {
    this.products$.subscribe((items) => {
      this.glassTable.reassignData(items.filter(
        (item) => item.type === ProductsTypes.glass
      ));
      this.articlesTable.reassignData(items.filter(
        (item) => item.type !== ProductsTypes.glass
      ));
    });
  }

  deleteArticle(item: any) {
    this.dataSourceArticles.splice(item , 1);
    this.articlesTable.render()
  }

  deleteGlass(item: any) {
    this.dataSourceGlass.splice(item , 1);
    this.glassTable.render()
  }
}
