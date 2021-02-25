import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FieldConfig } from '@tanglass-erp/material';
import { Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class FormDialog implements OnInit, OnDestroy {
  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();
  abstract regConfig: FieldConfig[];
  // Validators
  static REQUIRED = {
    name: "required",
    validator: Validators.required,
    message: "Required"
  };
  static MAXNUMBER = (limit) =>
      ({
        name: "max",
        validator: Validators.max(limit),
        message: "Max dépassé"
    })
  static EMAIL = {
    name: "max",
    validator: Validators.email,
    message: "Email non valide"
  };
  static MINLENGTH = (length) => (
    {
      name: "min",
      validator: Validators.minLength(length),
      message: "Min 8 characters"
    }
  )
  static PASSWORD = [
    FormDialog.MINLENGTH(8),
    FormDialog.REQUIRED,
  ];

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

  ngOnInit(): void {
    this.buildForm();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  abstract buildForm(): void ;

}
