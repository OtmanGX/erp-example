import { AfterViewInit, Component } from '@angular/core';
import {regConfigDeliveryInfos} from "@TanglassUi/purchase/utils/forms";
import {SharedFacade } from '@TanglassStore/shared/index';
import { map } from 'rxjs/operators';
import { FormArray } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PopDeliveryItemComponent } from "@TanglassUi/purchase/components/pop-delivery-item.component";
import { Column, FieldConfig } from '@tanglass-erp/material';
import { SubstanceHeaders } from "@TanglassUi/purchase/utils/grid-header";
import { SubstancesFacade } from "@TanglassStore/product/lib/+state/substances.facade";
import { DeliveriesFacade } from '@tanglass-erp/store/purchase';

@Component({
  selector: 'ngx-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.scss'],
})
export class AddDeliveryComponent   implements AfterViewInit {
  title = 'Réception Fournisseur';
  regConfig: FieldConfig[];
  displayedColumns: Array<Column> = SubstanceHeaders;

  formArray = new FormArray([]);
  orderForms = [];
  data;
  deliveries$=this.purchaseFacade.selectedDeliveryItems$
 
  providers$=this.facade.allShortProvider$.pipe(
    map(elem=>elem.map(val=>({key:val.code,value:val.name})))
  )

  constructor(
    private facade: SharedFacade,
    public dialog: MatDialog,
    private substancesFacade:SubstancesFacade,
    private purchaseFacade:DeliveriesFacade,
  ) {}

  ngOnInit() {
    this.facade.loadAllShortWarehouses();
    this.facade.loadAllShortProvider();
    this.substancesFacade.loadAllSubstances()
    this.regConfig = regConfigDeliveryInfos(
      this.data,
      this.providers$,
    );
  }
  ngAfterViewInit(): void {
   
  }
  openDialog(){
    const dialogRef = this.dialog.open(PopDeliveryItemComponent, {
      width: '1000px',
      panelClass: 'panel-dialog',
      data: '',
    }); 
   }
  save(){}
  cancel(){}
}
