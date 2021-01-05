import { Component, OnInit, Input, Inject, ViewChild, ContentChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormDialog, DynamicFormComponent, Groupfield } from '@tanglass-erp/material';
import { forkJoin } from 'rxjs';
import { Service } from '@tanglass-erp/core/product';

@Component({
  selector: 'ngx-pop-glass',
  templateUrl: './pop-service.component.html',
  styleUrls: ['./pop-service.component.scss'],
})
export class PopServiceComponent extends FormDialog implements OnInit {
  @Input() title: string;
  @ContentChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: Groupfield[];

  constructor(
    public dialogRef: MatDialogRef<PopServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service,
  ) {
    super(dialogRef, data);
  }

  ngOnInit(): void {
    this.buildMpForm();
  }

  buildMpForm() {
    this.regConfig = [
      {
        name: "service",
        label: "Service",
        headerVisible:false,
        fields: [
          {type: "input", label: "Nom", inputType: "text", name: "name", value: this.data.name,
            validations: [
              FormDialog.REQUIRED
            ]
          },
          {type: "input", label: "Unité de prix par défaut", inputType: "text", name: "defaultPriceUnit", value: this.data.name,
            validations: [
              FormDialog.REQUIRED
            ]
          },
        ]
      },
      {
        name: "params",
        label: "Params",
        headerVisible:false,
        fields: [
          {type: "inputTag", label: "Paramètres", name: "params", value: this.data.params ?? [], options: []}
        ]
      },

    ];

  }

  onSubmit(formValue) {
    this.submit(formValue);
  }
}
