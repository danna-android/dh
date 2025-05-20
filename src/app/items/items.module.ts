import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemNewComponent } from './components/item-new/item-new.component';
import { ItemsComponent } from './items.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemsListComponent,
    ItemNewComponent,
    ItemCardComponent,
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItemsModule { }
