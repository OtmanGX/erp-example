import { Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Companie } from '@TanglassCore/models/management/companie';
import { PopCompaniesComponent } from './pop-companies/pop-companies.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CompaniesDatasource } from '@TanglassUi/management/companies/companies-datasource';
import * as CompanieActions from '@TanglassStore/management/actions/companies.actions';
import * as CompanieSelector from '@TanglassStore/management/selectors/companies.selectors';
import { AppState } from '@tanglass-erp/store/app';
import { select, Store } from '@ngrx/store';


const initialSelection = [];
const allowMultiSelect = true;

@Component({
  selector: 'ngx-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Companie>;
  dataSource: CompaniesDatasource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select', 'name', 'phone', 'ICE',
    'IF', 'RC', 'CNSS', 'webSite', 'users', 'Fax', 'address', 'email', 'action'];
  colums;
  selectedRows = [];
  dataCompanie$: Observable<CompanieSelector.CompaniesViewModel>;

  // Selection Logic
  columns;
  selection;
  hide = false;

  constructor(public dialog: MatDialog, private store: Store<AppState> ) {
    this.columns = [
      {key: 'name', title: 'Raison Sociale', colPipe: null},
      {key: 'ICE', title: 'ICE', colPipe: null},
      {key: 'IF', title: 'IF', colPipe: null},
      {key: 'RC', title: 'RC', colPipe: null},
      {key: 'CNSS', title: 'CNSS', colPipe: null},
      {key: 'address', title: 'Address', colPipe: null},
      {key: 'phone', title: 'Tél N°', colPipe: null},
      {key: 'Fax', title: 'Fax°', colPipe: null},
      {key: 'email', title: 'Email', colPipe: null},
      {key: 'salePoints', title: 'Points de ventes', colPipe: null},
      {key: 'users', title: 'Employées', colPipe: null},
      {key: 'webSite', title: 'Site Web', colPipe: null},
    ];
  }

  ngOnInit(): void {
    this.dataCompanie$ = this.store.pipe(select(CompanieSelector.selectCompaniesViewModel));
    this.selection = new SelectionModel<Companie>(allowMultiSelect, initialSelection);
    this.store.dispatch(CompanieActions.loadCompanies());
    this.dataSource = new CompaniesDatasource();
    this.dataCompanie$.subscribe( data => this.dataSource.data = data.companies);
  }

  onUserRowSelect(event) {
    this.selectedRows = event.selected;
  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openDialog(data = {}) {
    const dialogRef = this.dialog.open(PopCompaniesComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        this.store.dispatch(CompanieActions.addCompanie({companie: result}));
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

}
