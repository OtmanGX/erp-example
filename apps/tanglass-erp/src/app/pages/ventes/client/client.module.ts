import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbTabsetModule,
  NbLayoutModule,
  NbFormFieldModule,
  NbTooltipModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ThemeModule } from '@TanglassTheme/theme.module';
import { ClientRoutingModule } from './client-routing.module';
import { CreateClientComponent } from './create-client/create-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ClientComponent } from './client.component';
import { PopContactFormComponent } from './create-client/pop-contact-form/pop-contact-form.component';
import { PopContactsTableComponent } from './create-client/pop-contacts-table/pop-contacts-table.component';

@NgModule({
  declarations: [
    CreateClientComponent,
    ListClientComponent,
    ClientComponent,
    PopContactFormComponent,
    PopContactsTableComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NgMultiSelectDropDownModule,

    NbTabsetModule,
    NbLayoutModule,
    NbFormFieldModule,
    NbTooltipModule,
    NgxPrintModule,
  ],
})
export class ClientModule {}
