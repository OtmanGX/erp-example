import { Component, Inject, OnInit,ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductDraftFacade ,Product_draft,ProductsTypes,DraftFacade} from "@tanglass-erp/store/sales";
import {MatSelectionList} from '@angular/material/list'

@Component({
  selector: 'ngx-pop-repair',
  templateUrl: 'pop-repair.component.html',
  styleUrls: ['./pop-repair.component.scss'],
})
export class PopRepairComponent implements OnInit {
  @ViewChild('products')products:MatSelectionList
  data:Product_draft[];
  draft_id;
  constructor(
    private draft_facade: DraftFacade,
    public dialogRef: MatDialogRef<PopRepairComponent>,
    @Inject(MAT_DIALOG_DATA) public row:Product_draft,
    private facade: ProductDraftFacade,
  ) {}

  ngOnInit() {
    this.draft_facade.selectedDraft$.subscribe(id => this.draft_id = id)
    this.data=[
      this.row,
      ...this.facade.getDependencies(this.row?.glass_draft?.id)
    ]
    
  }
  generateRepair(product:Product_draft){
    console.log(product)
    // switch (product?.type) {
    //   case ProductsTypes.glass: {
    //     this.facade.addGlass({ ...product, draft_id: this.draft_id,isRepeated:true })
    //     break;
    //   }
    //   case ProductsTypes.customerPorduct: {
    //     this.facade.addCustomerProduct({ ...product, draft_id: this.draft_id,isRepeated:true})
    //     break;
    //   }
    //   case ProductsTypes.service: {
    //     this.facade.addService({ ...product, draft_id: this.draft_id ,isRepeated:true})
    //     break;
    //   }
    //   case ProductsTypes.consumable: {
    //     this.facade.addConsumable({ ...product, draft_id: this.draft_id,isRepeated:true })
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
  }

} 
