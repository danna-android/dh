import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemState, selectAll } from './item.reducer';
import { Item } from '../enums/item.model';

export const selectItemState = createFeatureSelector<ItemState>('items');

export const selectAllItems = createSelector(selectItemState, selectAll);

export const selectSearchTerm = createSelector(
  selectItemState,
  (state: ItemState) => state.searchTerm
);

export const selectFilteredItems = createSelector(
  selectAll,
  selectSearchTerm,
  (items: Item[], searchTerm: string | null) => {
    if (!searchTerm) {
      return items;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return items.filter(item =>
      item.title.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.description.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }
);
