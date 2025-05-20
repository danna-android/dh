import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemNewComponent } from './components/item-new/item-new.component';


@NgModule({
  declarations: [
    ItemsListComponent,
    ItemNewComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule
  ]
})
export class ItemsModule { }
