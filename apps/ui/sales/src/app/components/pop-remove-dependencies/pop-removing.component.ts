import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
@Component({
  selector: 'ngx-pop-removing',
  templateUrl: 'pop-removing.component.html',
  styleUrls: ['./pop-removing.component.scss']
})
export class PopRemovingComponent  {
  products: string[] = ['coupe', 'trempage', 'fintion', 'film',];

  constructor(
    public dialogRef: MatDialogRef<PopRemovingComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private store: Store,
  ) { }


}
