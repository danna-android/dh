import { Component, OnInit } from '@angular/core';
import { Item } from './enums/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  showModal = false;
  selectedItem?: Item;

  openCreateModal() {
    this.selectedItem = undefined;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  handleSubmit(newItem: Item) {
    this.closeModal();
  }
}
