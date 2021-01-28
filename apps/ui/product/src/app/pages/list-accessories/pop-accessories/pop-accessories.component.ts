import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigAccessory } from '../../../utils/forms';
import { AppState } from '@tanglass-erp/store/app';
import { Store } from '@ngrx/store';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-accessories.component.html',
  styleUrls: ['./pop-accessories.component.scss'],
})
export class PopAccessoriesComponent extends FormDialog {
  title = "Ajouter un accessoire";
  regConfig: Groupfield[];
  listCompanies = [];

  constructor(
    public dialogRef: MatDialogRef<PopAccessoriesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>

  ) {
    super(dialogRef, data);
  }


  buildForm() {
    this.regConfig = regConfigAccessory(this.data, this.listCompanies);
  }

  

}
