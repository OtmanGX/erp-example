import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-companies',
  templateUrl: './pop-companies.component.html',
  styleUrls: ['./pop-companies.component.scss'],
})
export class PopCompaniesComponent extends FormDialog {

  regConfig: FieldConfig[];


  constructor(
    public dialogRef: MatDialogRef<PopCompaniesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef,data);
  }

  ngOnInit(): void {
    this.buildUserForm();
  }

  buildUserForm(): void {
    this.regConfig = [
      {type: "input", label: "Nom", inputType: "text", name: "name", value: this.data.name,
        validations: [
          FormDialog.REQUIRED
        ]
      },
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
      {type: "input", label: "RC", inputType: "text", name: "RC", value: this.data.RC,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "CNSS", inputType: "text", name: "CNSS", value: this.data.CNSS,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Adresse", inputType: "text", name: "address", value: this.data.address,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "Téléphone", inputType: "text", name: "phone", value: this.data.phone,
        validations: [
          FormDialog.REQUIRED
        ]
      },
      {type: "input", label: "E-mail", inputType: "text", name: "email", value: this.data.email,
        validations: [
          FormDialog.REQUIRED
        ]
      },
    ];
  }

}
