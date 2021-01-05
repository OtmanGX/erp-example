import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
// Angular Material imports
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

// Components
import { SelectComponent } from '../components/form/select.component';
import { CheckboxComponent } from '../components/form/checkbox.component';
import { RadiobuttonComponent } from '../components/form/radiobutton.component';
import { DateComponent } from '../components/form/date.component';
import { ButtonComponent } from '../components/form/button.component';
import { InputComponent } from '../components/form/input.component';
import { DynamicFormComponent } from '../components/form/dynamic-form.component';
import { DynamicFieldDirective } from '../components/form/dynamic-field.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { InputSelectComponent } from '../components/form/input-select.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NgxMatTagInputModule } from 'ngx-mat-tag-input';
import { TagInputComponent } from '../components/form/tag-input.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { DialogBodyComponent } from '../components/dialog-body.component';


export const MATERIAL_MODULES = [
  FlexLayoutModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatTableModule,
  MatSelectModule,
  MatPaginatorModule,
  MatSortModule,
  MatDividerModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTooltipModule,
  MatRadioModule,
  MatDialogModule,
  MatDatepickerModule,
  MatBottomSheetModule
];

export const OTHER_MODULES = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  NgxMatTagInputModule
];

export const COMPONENTS = [
  InputComponent,
  InputSelectComponent,
  ButtonComponent,
  SelectComponent,
  DateComponent,
  RadiobuttonComponent,
  TagInputComponent,
  CheckboxComponent,
  ];

export const OTHER_COMPONENTS = [
  DynamicFieldDirective,
  DynamicFormComponent,
  DialogBodyComponent
];

@NgModule({
  declarations: [...COMPONENTS, ...OTHER_COMPONENTS, DialogBodyComponent],
  imports: [...OTHER_MODULES, ...MATERIAL_MODULES, MatAutocompleteModule, MatChipsModule],
  exports: [...OTHER_MODULES, ...MATERIAL_MODULES, ...COMPONENTS, ...OTHER_COMPONENTS],
  entryComponents: COMPONENTS,
})
export class MaterialModule {}
