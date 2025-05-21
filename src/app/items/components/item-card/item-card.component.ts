import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../enums/item.model';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() item!: Item;
  @Output() edit = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();
  @Input() selected = false;
  @Output() toggleSelection = new EventEmitter<{ item: Item; selected: boolean }>();

  onCheckboxChange(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.toggleSelection.emit({ item: this.item, selected: checked });
  }

  onDelete(): void {
    this.delete.emit(this.item);
  }

  onEdit() {
    this.edit.emit(this.item);
  }
}
