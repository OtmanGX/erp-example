import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OrderProductionMockService } from '@TanglassCore/mock/production/productionOrder.mock.service';
import { ProductionOrder } from '@TanglassCore/models/production/productionOrder.model';
import { MainGridComponent } from '../components/main-grid/main-grid.component';
import { Observable } from 'rxjs';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'ngx-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.scss'],
})
export class ListOrdersComponent implements OnInit, AfterViewInit {
  @ViewChild(MainGridComponent) mainGrid;
  orders$: Observable<ProductionOrder[]>;
  agGrid: AgGridAngular;
  columnId = 'id';
  columnDefs;
  autoGroupColumnDef = {
    // headerName: 'Model',
    // field: 'model',
    // cellRenderer: 'agGroupCellRenderer',
    // cellRendererParams: {
    //   checkbox: true
    // }
  };
  constructor(private ordersService: OrderProductionMockService,
              public datepipe: DatePipe) {
    this.setColumnDefs();
  }

  ngOnInit(): void {
    this.getOrders();
  }

  ngAfterViewInit(): void {
    this.agGrid = this.mainGrid.agGrid;
  }

  setColumnDefs() {
    this.columnDefs = [
      { field: 'id', headerName: 'N° B.T',  type: 'numberColumn'},
      { field: 'attachements_id', headerName: 'N° B.C', type: 'numberColumn'},
      { field: 'date', headerName: 'Date', type: "dateColumn", },
      { field: 'delay', headerName: 'Délai'},
      { field: 'id', headerName: 'Action', type: "editColumn"},
    ];
  }

  getOrders() {
    this.orders$ = this.ordersService.getAll();
  }

  eventTriggering(event) {
    // Store Action Dispatching
    switch (event.action) {
      case 'add':
        break;
      case 'edit':
        break;
      // ...
    }
  }



// settings = {
  //   selectMode: 'multi',
  //   hideHeader: false,
  //   actions: false,
  //   columns: {
  //     code: {
  //       title: 'N° B.T',
  //       type: 'custom',
  //       valuePrepareFunction: (cell, row: ProductionOrder) => {
  //         let data = {
  //           link: 'production/detail/',
  //           linkText: 'B.T 00' + row.id + '/21',
  //         };
  //         return data;
  //       },
  //       renderComponent: ObjectRenderComponent,
  //       sortDirection: 'desc',
  //     },
  //     codeCommande: {
  //       title: 'N° B.C',
  //       type: 'html',
  //       valuePrepareFunction: (cell, row: ProductionOrder) => {
  //         return ' B.C 00' + row.attachements_id + '/21';
  //       },
  //     },
  //
  //     orderDate: {
  //       title: 'Date ',
  //       type: 'html',
  //       valuePrepareFunction: (cell, row: ProductionOrder) => {
  //         let date = this.datepipe.transform(row.date, 'dd/MM/yyyy');
  //         return date;
  //       },
  //     },
  //     delay: {
  //       title: 'Délai',
  //       type: 'html',
  //       valuePrepareFunction: (cell, row: ProductionOrder) => {
  //         let date = this.datepipe.transform(row.delay, 'dd/MM/yyyy');
  //         return date;
  //       },
  //     },
  //     tags: {
  //       title: 'Tags',
  //       type: 'string',
  //     },
  //   },
  // };
}
