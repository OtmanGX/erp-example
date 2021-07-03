import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductDraftFacade ,Product_draft } from "@tanglass-erp/store/sales";
import {MatSelectionList} from '@angular/material/list'

@Component({
  selector: 'ngx-pop-repair',
  templateUrl: 'pop-repair.component.html',
  styleUrls: ['./pop-repair.component.scss'],
})
export class PopRepairComponent implements OnInit {
  @ViewChild('products')products:MatSelectionList
  data:Product_draft[];
  constructor(
    public dialogRef: MatDialogRef<PopRepairComponent>,
    @Inject(MAT_DIALOG_DATA) public row:Product_draft,
    private facade: ProductDraftFacade,
  ) {}

  ngOnInit() {
  }
  generateRepair(){
      
  }

} 
