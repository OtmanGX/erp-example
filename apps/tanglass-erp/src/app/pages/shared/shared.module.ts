import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";

import { NbFormFieldModule, NbAutocompleteModule } from "@nebular/theme";
import { KeyboardItemsComponent } from "./keyboard-items/keyboard-items.component";
import { NbUserModule } from "@nebular/theme";
import { StylingThemesDirective } from './styling-themes.directive';
@NgModule({
  declarations: [
    KeyboardItemsComponent,
    StylingThemesDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbFormFieldModule,
    NbAutocompleteModule,
    NgMultiSelectDropDownModule,
    NbUserModule
  ],
  exports: [KeyboardItemsComponent,StylingThemesDirective],
})
export class SharedModule {}
