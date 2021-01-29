import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigAccessory } from '../../../utils/forms';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-accessories.component.html',
  styleUrls: ['./pop-accessories.component.scss'],
})
export class PopAccessoriesComponent extends FormDialog {
  title = "Ajouter un accessoire";
  regConfig: Groupfield[];
  listCompanies = this.facade.allShortCompany$

  constructor(
    public dialogRef: MatDialogRef<PopAccessoriesComponent>,
    private facade:ShortCompanyFacade,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>

  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.facade.loadAllShortCompanies();
    this.buildForm();
  }
  buildForm() {
   // this.regConfig = regConfigAccessory(this.data, this.listCompanies);
   this.listCompanies.subscribe(companies => this.regConfig = regConfigAccessory(this.data, companies))

  }

  

}
