import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FieldConfig } from '@tanglass-erp/material';
import { Validators } from '@angular/forms';

@Component({
  template: ''
})
export abstract class FormDialog implements OnInit{
  abstract regConfig: FieldConfig[];
  static REQUIRED = {
    name: "required",
    validator: Validators.required,
    message: "Required"
  };

  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closePopup() {
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit(value: any) {
    this.dialogRef.close(value);
  }

  abstract ngOnInit(): void ;

}
