import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from '@TanglassTheme/directives/highlight.directive';


export const NB_MODULES: any[] = [
  ReactiveFormsModule,
  FormsModule,
];

const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
];

@NgModule({
  imports: [CommonModule, ...NB_MODULES,],
  exports: [CommonModule, ...NB_MODULES, ...PIPES, HighlightDirective],
  declarations: [...PIPES, HighlightDirective],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
      ],
    };
  }
}
