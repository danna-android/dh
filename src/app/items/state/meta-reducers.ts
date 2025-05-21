import { ActionReducer, MetaReducer } from '@ngrx/store';
import { saveState } from './local-storage';

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return (state, action) => {
    const nextState = reducer(state, action);
    saveState(nextState);
    return nextState;
  };
}

export const metaReducers: MetaReducer[] = [localStorageSyncReducer];