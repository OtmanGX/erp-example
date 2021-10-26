import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Product_draft, ProductDraftFacade } from '@tanglass-erp/store/sales';
import { Column } from '@tanglass-erp/material';
import { ProductColumns } from '@TanglassUi/sales/utils/grid-headers';

@Component({
  selector: 'ngx-order-repairs',
  templateUrl: './order-repairs.component.html',
  styleUrls: ['./order-repairs.component.scss'],
})
export class OrderRepairsComponent implements OnInit {
  displayedColumns: Array<Column> = ProductColumns;
  dataSource: Product_draft[] = [];


  @ViewChild(MatTable, { static: true }) table: MatTable<Product_draft>;

  constructor(
    private facade: ProductDraftFacade,
  ) {}

  ngOnInit(): void {
    this.facade
    .getProductsGroups()
    .subscribe(
      (data) => (
        this.dataSource = data.repeated
      )
    )
  }
  launch(){

  }
}
