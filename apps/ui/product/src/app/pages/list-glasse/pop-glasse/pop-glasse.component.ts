import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigGlass } from '../../../utils/forms';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-glasse.component.html',
  styleUrls: ['./pop-glasse.component.scss'],
})
export class PopGlasseComponent extends FormDialog {
  title = "Ajouter un Verre";
  listCompanies = [];
  regConfig: Groupfield[];

  constructor(
    public dialogRef: MatDialogRef<PopGlasseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    this.regConfig = regConfigGlass(this.data, this.listCompanies);
  }
}
