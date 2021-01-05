import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FieldConfig, FormDialog } from '@tanglass-erp/material';

@Component({
  selector: 'ngx-pop-sale-points',
  templateUrl: './pop-sale-points.component.html',
  styleUrls: ['./pop-sale-points.component.scss'],
})
export class PopSalePointsComponent extends FormDialog{

  listCompanies = ['Tanglass', 'Trimar'];
  listUsers = ['Tanja Balia', 'Mabrouk', 'Souani', 'Dar Tounssi', 'Sidi Driss'];
  regConfig: FieldConfig[];

  constructor(
    public dialogRef: MatDialogRef<PopSalePointsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    super(dialogRef, data);
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
      {type: "input", label: "Fax", inputType: "text", name: "fax", value: this.data.fax,
        validations: [
          FormDialog.REQUIRED
        ]
      },
    ];
  }
}
