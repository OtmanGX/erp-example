import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfService } from '../../../../utils/forms';
import { map } from 'rxjs/operators';
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';


@Component({
  selector: 'ngx-pop-service-config',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog {
  title = "Ajouter collection de service";
  regConfig: Groupfield[] | any;
  companies$ = this.facade.allShortCompany$
    .pipe(map(item => item.map(company => ({key: company.id, value: company.name})))
    );
  params = [];

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    private facade: ShortCompanyFacade,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    this.facade.loadAllShortCompanies();
    const dataParams = JSON.parse(this.data.params);
    this.regConfig = regConfService(this.data.service, this.companies$, dataParams);
  }

  submit(value: any) {
    this.dialogRef.close(value);
    }
}