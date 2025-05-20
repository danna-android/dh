import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../enums/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  @Input() items: Item[] | null = [];
  @Output() edit = new EventEmitter<Item>();
  @Output() delete = new EventEmitter<Item>();

  constructor() {}

  ngOnInit(): void {}
}
