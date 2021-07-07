import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CashRegisterComponent } from '@TanglassUi/cash-register/pages/cash-register/cash-register.component';
import { MaterialModule } from '@tanglass-erp/material';
import { MainAgGridModule } from '@tanglass-erp/ag-grid';



@NgModule({
  declarations: [CashRegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: CashRegisterComponent
        }
      ],
    ),

    MaterialModule,
    MainAgGridModule,
  ]
})
export class CashRegisterModule { }
