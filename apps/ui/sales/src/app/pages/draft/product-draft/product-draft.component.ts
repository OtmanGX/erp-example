import { Component, OnInit, ViewChild, Input, OnChanges } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from "../pop-product/pop-product.component";
import { FieldConfig } from '@tanglass-erp/material';
import { Store } from '@ngrx/store';
import { ELEMENT_DATA } from "./mock-data";
import { ProductDraftHeaders } from "../../../utils/table-headers";
import { DraftItem } from "../../../utils/models";
import { ProductDraftFacade } from "@tanglass-erp/store/sales";
import { ProductsTypes, GlassGroup, ServiceGroup, AccessoryGroup } from "../../../utils/enums";

@Component({
  selector: 'ngx-product-draft',
  templateUrl: './product-draft.component.html',
  styleUrls: ['./product-draft.component.scss']
})

export class ProductDraftComponent implements OnInit {
  displayedColumns: string[] = ['id', 'product_code', 'label', 'count',
    'heigth', 'width', 'm2', 'ml', 'unit', 'price', 'total_price', 'company_name', 'action'];
  dataSource = ELEMENT_DATA;
  headers = ProductDraftHeaders
  regConfig: FieldConfig[];
  Products = this.facade.allProduct$;

  @ViewChild(MatTable, { static: true }) table: MatTable<DraftItem>;
  @Input() draft_id;
  constructor(
    public dialog: MatDialog,
    private store: Store,
    private facade: ProductDraftFacade,
  ) { }
  ngOnInit(): void {
  }

  ngOnChanges() {

    console.log(this.draft_id[0]?.id)
    this.facade.loadAllProducts(this.draft_id[0]?.id)

  }

  addRowData(row_obj) {
    // this.dataSource.push({});
    this.table.renderRows();
  }

  deleteRowData(row_obj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id != row_obj.id;
    });
  }
  openDialog(action, product_type: string, row?: DraftItem) {
    const dialogRef = this.dialog.open(PopProductComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: { product_type, row }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
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
        default: {
          break;
        }

      }
    });
  }
}
