import { Component, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfService } from '../../../../utils/forms';
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-pop-service-config',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements OnDestroy {
  title = "Ajouter collection de service";
  regConfig: Groupfield[] | any;
  companiesSubscription: Subscription;
  listCompanies = this.facade.allShortCompany$
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
    this.listCompanies.subscribe(companies => this.regConfig = regConfService(this.data.service, companies))
  }

  submit(value: any) {
    this.dialogRef.close(value);
    }

  ngOnDestroy(): void {
    // this.companiesSubscription.unsubscribe();
  }
}
