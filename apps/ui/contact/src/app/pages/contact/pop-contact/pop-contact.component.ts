import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, Groupfield } from '@tanglass-erp/material';
import { regConfigContactDetailed } from '../../../utils/forms';

@Component({
  selector: 'ngx-pop-contact',
  templateUrl: './pop-contact.component.html',
  styleUrls: ['./pop-contact.component.scss'],
})
export class PopContactComponent extends FormDialog {

  regConfig: Groupfield[];
  title = "Ajouter un contact";

  constructor(
    public dialogRef: MatDialogRef<PopContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }

  buildForm(): void {
    this.regConfig = regConfigContactDetailed(this.data);
    const providers = this.regConfig[1].fields.find(elem => elem.name === 'provider');
    const customers = this.regConfig[1].fields.find(elem => elem.name === 'customer');
    // providers['options'] = this.providers$.pipe(map(item => item.map(obj => ({key: obj.id, value: obj.name}));
    // customers['options'] = this.customers$.pipe(map(item => item.map(obj => ({key: obj.id, value: obj.name}));
  }
}
