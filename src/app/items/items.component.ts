import { Component, OnInit } from '@angular/core';
import { Item } from './enums/item.model';
import { selectAllItems } from './state/item.selectors';
import { Store } from '@ngrx/store';
import * as ItemActions from './state/item.actions';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  showModal = false;
  selectedItem?: Item;
  items$ = this.store.select(selectAllItems);

  constructor(private store: Store) {}

  openCreateModal() {
    this.selectedItem = undefined;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleSubmit(newItem: Item) {
    this.store.dispatch(ItemActions.createItem({ item: newItem }));
    this.closeModal();
  }

  onEdit(item: Item) {
    this.store.dispatch(ItemActions.updateItem({ item }));
  }

  onDelete(item: Item) {
    this.store.dispatch(ItemActions.deleteItem({ id: item.id }));
  }
}
