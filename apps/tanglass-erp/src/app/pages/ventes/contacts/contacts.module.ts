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
  NbTabsetModule,
  NbFormFieldModule,
  NbTooltipModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ThemeModule } from '@TanglassTheme/theme.module';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { PopClientFormComponent } from './create-contact/pop-client-form/pop-client-form.component';
import { PopClientsTableComponent } from './create-contact/pop-clients-table/pop-clients-table.component';

@NgModule({
  declarations: [
    ContactsComponent,
    CreateContactComponent,
    ListContactComponent,
    PopClientFormComponent,
    PopClientsTableComponent,
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    CommonModule,
    ThemeModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbCheckboxModule,
    NbRadioModule,
    NbSelectModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    NbTabsetModule,
    NbFormFieldModule,
    NbTooltipModule,
    NgxPrintModule,
    NgMultiSelectDropDownModule,
  ],
})
export class ContactsModule {}
