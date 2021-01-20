import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigConsumable } from '../../../utils/forms';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-consumable.component.html',
  styleUrls: ['./pop-consumable.component.scss'],
})
export class PopConsumableComponent extends FormDialog {
  title = "Ajouter un consommable";
  regConfig: Groupfield[];
  listCompanies = [];

  constructor(
    public dialogRef: MatDialogRef<PopConsumableComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }

  buildForm() {
    this.regConfig = regConfigConsumable(this.data, this.listCompanies);
  }
}
