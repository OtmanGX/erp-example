import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { SalePoint } from '@TanglassCore/models/management/sales-points';
import { LocalDataSource } from 'ng2-smart-table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Companie } from '@TanglassCore/models/management/companie';
import { MatDialog } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { SalePointDataSource } from '@TanglassUi/management/sale-points/sale-points-datasource';
import { PopSalePointsComponent } from '@TanglassUi/management/sale-points/pop-sale-points/pop-sale-points.component';
import * as SalePointSelector from '@TanglassStore/management/selectors/sale-point.selectors';
import * as SalePointActions from '@TanglassStore/management/actions/salePoint.actions';
import { AppState } from '@tanglass-erp/store/app';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';



const initialSelection = [];
const allowMultiSelect = true;

@Component({
  selector: 'ngx-sale-points',
  templateUrl: './sale-points.component.html',
  styleUrls: ['./sale-points.component.scss'],
})
export class SalePointsComponent implements AfterViewInit, OnInit {
  selectedRows = [];
  dataSalesPoints$:  Observable<SalePointSelector.SalePointsViewModel>;
  source: LocalDataSource = new LocalDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<SalePoint>;
  dataSource: SalePointDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'id', 'name', 'phone', 'companie',
    'users', 'Fax', 'address', 'email', 'action'];
  colums;

  // Selection Logic
  columns;
  selection;
  hide = false;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
    this.columns = [
      {key: 'id', title: 'Code', colPipe: null},
      {key: 'name', title: 'Nom', colPipe: null},
      {key: 'address', title: 'Address', colPipe: null},
      {key: 'phone', title: 'Tél N°', colPipe: null},
      {key: 'Fax', title: 'Fax°', colPipe: null},
      {key: 'email', title: 'Email', colPipe: null},
      {key: 'companie', title: 'Société', colPipe: null},
      {key: 'users', title: 'Employées', colPipe: null},
    ];
  }

  ngOnInit(): void {
    this.selection = new SelectionModel<Companie>(allowMultiSelect, initialSelection);
    this.dataSource = new SalePointDataSource();
    this.dataSalesPoints$ = this.store.pipe(select(SalePointSelector.selectSalePointsViewModel));
    this.store.dispatch(
      SalePointActions.loadSalePoints()
    );
    this.dataSalesPoints$.subscribe(data => this.dataSource.data = data.salePoints);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(data = {}) {
    const dialogRef = this.dialog.open(PopSalePointsComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(SalePointActions.addSalePoint({ salePoint: result }));
      }
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  search(value: string) {
  }

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }
}
