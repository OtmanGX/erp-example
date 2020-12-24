import {
  ActionReducer,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromAuth from './lib/auth.reducer';

export interface AppState {
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};



export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state auth', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

