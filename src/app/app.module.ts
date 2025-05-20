import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './items/state/item.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemsModule,
    StoreModule.forRoot({ items: itemReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
