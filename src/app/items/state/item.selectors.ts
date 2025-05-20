import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState, selectAll } from './item.reducer';

export const selectItemState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(selectItemState, selectAll);
