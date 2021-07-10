import { Component, Input} from '@angular/core';
import { GridPermissions, GridView, MainGridComponent, Operations } from '@tanglass-erp/ag-grid';
import { AgGridAngular } from 'ag-grid-angular';
import { PaymentsHeaders } from '@TanglassUi/cash-register/utils/grid-headers';

@Component({
  selector: 'ngx-payments-grid',
  templateUrl: './payments-grid.component.html',
  styleUrls: ['./payments-grid.component.scss']
})
export class PaymentsGridComponent implements GridView {
  agGrid: AgGridAngular;
  columnDefs;
  columnId: string = 'id';
  @Input() data$;
  mainGrid: MainGridComponent;
  permissions: GridPermissions = {
    delete: false,
    update: false
  };

  constructor() {
    this.setColumnDefs();
  }

  ngOnInit(): void {
  }

  eventTriggering(event) {
    switch (event.action) {
      case Operations.add:
        break;
    }
  }

  ngAfterViewInit(): void {
  }

  setColumnDefs(): void {
    this.columnDefs = PaymentsHeaders;
  }

}
