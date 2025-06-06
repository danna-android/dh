import { createAction, props } from '@ngrx/store';
import { Item } from '../enums/item.model';
import { Update } from '@ngrx/entity';

export const createItem = createAction(
  '[Item] Create Item',
  props<{ item: Item }>()
);

export const loadItems = createAction('[Item] Load Items');
export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: Item[] }>()
);

export const addItemSuccess = createAction(
  '[Item] Add Item Success',
  props<{ item: Item }>()
);

export const updateItem = createAction(
  '[Item] Update Item',
  props<{ item: Item }>()
);

export const updateItemSuccess = createAction(
  '[Item] Update Item Success',
  props<{ update: Update<Item> }>()
);

export const deleteItem = createAction(
  '[Item] Delete Item',
  props<{ id: string }>()
);

export const deleteItemSuccess = createAction(
  '[Item] Delete Item Success',
  props<{ id: string }>()
);

export const setSearchTerm = createAction(
  '[Item] Set Search Term',
  props<{ searchTerm: string | null }>()
);