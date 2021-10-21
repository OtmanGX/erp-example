import { MatDialog } from '@angular/material/dialog';
import { PopProductComponent } from '@TanglassUi/sales/components/pop-product/pop-product.component';
import { TableComponent } from '@tanglass-erp/material';
import { Product } from '@TanglassUi/sales/utils/models';
import {
  ProductDraftFacade,
  Sales_Product_Type_Enum,
  Product_draft,
} from '@tanglass-erp/store/sales';
import { PopRemovingComponent } from '@TanglassUi/sales/components/pop-remove-dependencies/pop-removing.component';
import { PopRepairComponent } from '@TanglassUi/sales/components/pop-repair-product/pop-repair.component';
import { SharedFacade } from '@tanglass-erp/store/shared';
import { map } from 'rxjs/operators';

export class ActionsComponent {
  articlesTable: TableComponent<Product>;
  glassTable;
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
  constructor(
    public dialog: MatDialog,
    public facade: ProductDraftFacade,
    public sharedfacade:SharedFacade
  ) {}

  openDialog(
    action,
    product_type: string,
    rows?: Product[],
    asAService?: boolean
  ): void {
    this.facade.setSelectedGlasses(
      rows ?? this.glassTable.selection?._selected ?? []
    );
    const dialogRef = this.dialog.open(PopProductComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: { product_type, companies:this.companies$, warehouses:this.warehouses$ },
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
          this.facade.addManyServices({ ...result, draft_id: this.draft_id });
          break;
        }
        case Sales_Product_Type_Enum.Consommable: {
          this.facade.addManyConsumables(
            { ...result, draft_id: this.draft_id },
            asAService
          );
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
}
