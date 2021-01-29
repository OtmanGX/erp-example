import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigGlass } from '../../../utils/forms';
import { ShortCompanyFacade } from '@tanglass-erp/store/shared';

import { Store } from '@ngrx/store';
@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-glasse.component.html',
  styleUrls: ['./pop-glasse.component.scss'],
})
export class PopGlasseComponent extends FormDialog   {
  title = "Ajouter un Verre";
  //listCompanies = [];
  listCompanies = this.facade.allShortCompany$

  regConfig: Groupfield[];

  constructor(
    public dialogRef: MatDialogRef<PopGlasseComponent>,
    private facade:ShortCompanyFacade,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.facade.loadAllShortCompanies();
    this.buildForm();
  }
  buildForm() {
    this.listCompanies.subscribe(companies => this.regConfig = regConfigGlass(this.data, companies))
  }
}
