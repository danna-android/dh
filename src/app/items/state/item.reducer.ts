import { createReducer, on } from '@ngrx/store';
import { Item } from '../enums/item.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import * as ItemActions from './item.actions';

export interface ItemState extends EntityState<Item> {
  selectedItemId: string | null;
}

export const adapter = createEntityAdapter<Item>();

export const initialState: ItemState = adapter.getInitialState({
  selectedItemId: null,
});

export const itemReducer = createReducer(
  initialState,
  on(ItemActions.createItem, (state, { item }) => adapter.addOne(item, state)),
  on(ItemActions.loadItemsSuccess, (state, { items }) =>
    adapter.setAll(items, state)
  ),
  on(ItemActions.addItemSuccess, (state, { item }) =>
    adapter.addOne(item, state)
  ),
  on(ItemActions.updateItemSuccess, (state, { update }) =>
    adapter.updateOne(update, state)
  ),
  on(ItemActions.deleteItemSuccess, (state, { id }) =>
    adapter.removeOne(id, state)
  )
);

export const { selectAll, selectEntities, selectIds, selectTotal } =
  adapter.getSelectors();
