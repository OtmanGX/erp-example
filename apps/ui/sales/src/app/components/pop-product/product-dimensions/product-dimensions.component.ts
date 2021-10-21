import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
@Component({
  selector: 'ngx-dimensions',
  templateUrl: './product-dimensions.component.html',
  styleUrls: ['./product-dimensions.component.scss'],
})
export class DimensionsComponent {
  dimensionsForm: FormGroup;
  dimensions: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.dimensions = this.fb.array([
      this.fb.group({
        width: [''],
        heigth: [''],
        count: [''],
      }),
    ]);
    this.dimensionsForm = this.fb.group({
      dimensions: this.dimensions,
    });
  }

  createItem() {
    return this.fb.group({
      width: [''],
      heigth: [''],
      count: [''],
    });
  }

  addItem() {
    this.dimensions.push(this.createItem());
  }
}

