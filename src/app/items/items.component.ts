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

  selectedItems = new Set<string>();

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
    this.selectedItem = item;
    this.showModal = true;
  }

  onDelete(item: Item) {
    this.store.dispatch(ItemActions.deleteItemSuccess({ id: item.id }));
  }

  toggleSelection(item: Item, selected: boolean): void {
    const updated = new Set(this.selectedItems);
    if (selected) {
      updated.add(item.id);
    } else {
      updated.delete(item.id);
    }
    this.selectedItems = updated;
  }

  onShare(): void {
    this.items$.subscribe(allItems => {
      if (allItems) {
        const previouslySelectedItems = allItems.filter(item => this.selectedItems.has(item.id));
        console.log('Selected Items:', previouslySelectedItems);
        this.selectedItems.clear();
      }
    }).unsubscribe();
  }
}
