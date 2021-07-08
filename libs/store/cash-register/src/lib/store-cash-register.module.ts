import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCashBox from './cashbox/cash-box.reducer';
import { CashBoxEffects } from './cashbox/cash-box.effects';
import { CashBoxFacade } from './cashbox/cash-box.facade';
import * as fromExpenses from './expenses/expenses.reducer';
import { ExpensesEffects } from './expenses/expenses.effects';
import { ExpensesFacade } from './expenses/expenses.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCashBox.CASHBOX_FEATURE_KEY,
      fromCashBox.reducer
    ),
    EffectsModule.forFeature([CashBoxEffects]),
    StoreModule.forFeature(
      fromExpenses.EXPENSES_FEATURE_KEY,
      fromExpenses.reducer
    ),
    EffectsModule.forFeature([ExpensesEffects]),
  ],
  providers: [CashBoxFacade, ExpensesFacade],
})
export class StoreCashRegisterModule {}
