import {
  Component,
  Input,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { DatePipe } from '@angular/common';
import { MatEditComponent } from '../cell-renderers/mat-edit.component';
import { Observable, of } from 'rxjs';
import { GridObjectRenderComponentComponent } from '../grid-object-render-component/grid-object-render-component.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExportBottomSheetComponent } from '../export-bottom-sheet/export-bottom-sheet.component';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '@tanglass-erp/material';
import { LinkComponent } from '../cell-renderers/link.component';
import { Operations } from '../../enums/operations';
import { GridPermissions } from '../../interfaces/grid-permissions';
import { GroupButton } from '../../interfaces/group-button';
import { DateFilterComponent } from '../date-filter/date-filter.component';
import { dateType } from '../../interfaces/date';

@Component({
  selector: 'ngx-main-grid',
  templateUrl: './main-grid.component.html',
  styleUrls: ['./main-grid.component.scss'],
})
export class MainGridComponent {
  operations = Operations;
  @ViewChild('agGrid') public agGrid: AgGridAngular;
  _rowData: Observable<any> | Array<any>
  @Input() set rowData(obj) {
    if (obj instanceof Array)
      this._rowData = of(obj);
  }
  get rowData() {
    return this._rowData;
  }
  @Input() columnDefs: any;
  @Input() autoGroupColumnDef: any;
  @Input() columnId = 'id';
  // Toolbar
  @Input() withToolbar: boolean = true;
  @Input() extraActions: Array<GroupButton> = [];
  @Input() withDetails: boolean = false;
  _permissions: GridPermissions = {
    add: true,
    update: true,
    delete: true,
  };
  @Input() withCrud: boolean = true;
  @Input()
  set permissions(perms: GridPermissions) {
    this._permissions = {
      add: true,
      update: true,
      delete: true,
      ...perms,
    };
  }

  get permissions() {
    return this._permissions;
  }

  @Input() enableCharts: boolean = true;
  @Input() theme = 'ag-theme-alpine';
  @Input() rowGroupPanelShow = 'always';
  @Input() height = '900px';
  @Input() width = '100%';
  @Input()
  withDateFilter: boolean = false;
  @Output() triggerEvent = new EventEmitter<{ action: string; data?: any }>();
  private gridApi: any;
  private gridColumnApi: any;
  selectedData = new Array();
  context;
  hide = false; // For Search reset  button

  @Input()
  dateText;

  // Formatters
  dateFormatter = (params) =>
    !params.data
      ? null
      : this.datepipe.transform(params.data.date, 'dd/MM/yyyy');
  dateTimeFormatter = (params) =>
    !params.data
      ? null
      : this.datepipe.transform(params.data.date, 'dd/MM/yyyy HH:mm');

  // Renderers
  frameworkComponents: {
    editRenderer: MatEditComponent;
  };
  checkboxSelectionColumn = (params) => {
    const displayedColumns = params.columnApi.getAllDisplayedColumns();
    return displayedColumns[0] === params.column;
  };

  // AgGrid Parameters
  gridOptions = {
    getRowNodeId: (data) => {
      // the code is unique, so perfect for the ID
      return data[this.columnId];
    },
    // immutableData: true,
  };
  defaultColDef = {
    sortable: true,
    floatingFilter: true,
    filter: true,
    flex: 1,
    minWidth: 160,
    enableRowGroup: true,
    headerCheckboxSelection: this.checkboxSelectionColumn,
    headerCheckboxSelectionFilteredOnly: this.checkboxSelectionColumn,
    checkboxSelection: this.checkboxSelectionColumn,
  };

  dateColumnByFormatter = (formatter) => ({
    filter: 'agDateColumnFilter',
    suppressMenu: true,
    valueFormatter: formatter,
    filterParams: {
      comparator: function (filterLocalDateAtMidnight, cellValue: Date) {
        const day = cellValue.getDate();
        const month = cellValue.getMonth();
        const year = cellValue.getFullYear();
        const cellDate = new Date(year, month, day);
        if (cellDate < filterLocalDateAtMidnight) {
          return -1;
        } else if (cellDate > filterLocalDateAtMidnight) {
          return 1;
        } else {
          return 0;
        }
      },
    },
  });

  columnTypes = {
    nonEditableColumn: { editable: false },
    textColumn: { filter: 'agTextColumnFilter' },
    editColumn: { cellRendererFramework: MatEditComponent, filter: false },
    objectColumn: {
      cellRendererFramework: GridObjectRenderComponentComponent,
      filter: true,
    },
    dateColumn: this.dateColumnByFormatter(this.dateFormatter),
    dateTimeColumn: this.dateColumnByFormatter(this.dateTimeFormatter),
    linkColumn: {
      cellRendererFramework: LinkComponent,
      filter: 'agTextColumnFilter',
    },
    numberColumn: {
      filter: 'agNumberColumnFilter',
    },
  };

  sideBar = {
    toolPanels: [
      {
        id: 'columns',
        labelDefault: 'Columns',
        labelKey: 'columns',
        iconKey: 'columns',
        toolPanel: 'agColumnsToolPanel',
      },
      {
        id: 'filters',
        labelDefault: 'Filters',
        labelKey: 'filters',
        iconKey: 'filter',
        toolPanel: 'agFiltersToolPanel',
      },
    ],
  };

  statusBar = {
    statusPanels: [
      {
        statusPanel: 'agTotalAndFilteredRowCountComponent',
        align: 'left',
      },
      {
        statusPanel: 'agTotalRowCountComponent',
        align: 'center',
      },
      { statusPanel: 'agFilteredRowCountComponent' },
      { statusPanel: 'agSelectedRowCountComponent' },
      { statusPanel: 'agAggregationComponent' },
    ],
  };

  constructor(
    public datepipe: DatePipe,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog,
    private route: ActivatedRoute
  ) {
    this.context = {
      componentParent: this,
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.agGrid.gridOptions.onRowSelected = (event) => {
      this.selectedData = this.getSelectedRows();
    };
    this.route.queryParams.subscribe((params) => {
      if (params.hasOwnProperty('filterby')) {
        this.applyFilter(params.filterby, params.value);
      }
    });
  }

  applyFilter(key, value) {
    const instance = this.gridApi.getFilterInstance(key);
    instance.setModel({
      values: [value],
    });
    this.gridApi.onFilterChanged();
  }

  triggerAction(action: string, data?) {
    this.triggerEvent.emit({
      action,
      data,
    });
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => {
      return node.data;
    });
    // const selectedDataStringPresentation = selectedData.map(node => node.date + ' ' + node.id).join(', ');
    return selectedData;
  }

  search(value: string) {
    this.gridApi.setQuickFilter(value);
  }

  resetSearch() {
    this.hide = true;
    this.search('');
  }

  openBottomSheet() {
    const bottomSheetRef = this._bottomSheet.open(ExportBottomSheetComponent);
    bottomSheetRef.afterDismissed().subscribe((value) => {
      if (value === 'excel') this.exportExcel();
      else if (value === 'csv') this.exportCsv();
    });
  }

  exportCsv() {
    this.gridApi.exportDataAsCsv();
  }

  exportExcel() {
    this.gridApi.exportDataAsExcel();
  }

  openFilterDateDialog(): void {
    const dialogRef = this.dialog.open(DateFilterComponent);

    dialogRef.afterClosed().subscribe((result: dateType) => {
      if (result) {
        this.dateText = result.dateText;
        this.triggerAction(this.operations.dateChange, {
          dateStart: result.dateStart,
          dateEnd: result.dateEnd,
        });
      }
    });
  }

  deleteDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result)
        this.triggerAction(this.operations.delete, this.getSelectedRows());
    });
  }
}
