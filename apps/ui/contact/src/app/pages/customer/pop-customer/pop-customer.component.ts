import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-customer',
  templateUrl: './pop-customer.component.html',
  styleUrls: ['./pop-customer.component.scss'],
})
export class PopCustomerComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
  }
  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.regConfig = [
      {type: "input", name: "code", label: "ICE", inputType: "text", value: this.data.code},
      {type: "input", name: "name", label: "Nom", inputType: "text", value: this.data.name},
      {type: "input", label: "ICE", inputType: "text", name: "ICE", value: this.data.ICE,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "IF", inputType: "text", name: "IF", value: this.data.IF,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", name: "phone", label: "Téléphone", inputType: "text", value: this.data.phone},
      {type: "input", name: "mail", label: "E-mail", inputType: "text", value: this.data.mail},
      {type: "input", name: "note", label: "Note", inputType: "text", value: this.data.note},
      {type: "input", name: "website", label: "Site web", inputType: "text", value: this.data.website},
      {type: "input", name: "Fax", label: "Fax", inputType: "text", value: this.data.Fax},
    ];
  }
}
