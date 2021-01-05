import { Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-dialog-employee',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.scss']
})
export class DialogEmployeeComponent extends FormDialog {

  regConfig: FieldConfig[];

  constructor(public dialogRef: MatDialogRef<DialogEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    console.log(this.data);
    this.buildUserForm();
  }

  buildUserForm(): void {
    this.regConfig = [
      {type: "input", label: "Prénom", inputType: "text", name: "firstname", value: this.data.firstname,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Nom", inputType: "text", name: "lastname", value: this.data.lastname,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Nom d'utilisateur", inputType: "text", name: "username", value: this.data.username,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: this.data.phone,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "checkbox", label: "Active", inputType: "text", name: "active",
        value: this.data.active ?? true,
      },
    ];
  }

}
