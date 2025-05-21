import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsModule } from './items/items.module';
import { StoreModule } from '@ngrx/store';
import { itemReducer } from './items/state/item.reducer';
import { loadState } from './items/state/local-storage';
import { metaReducers } from './items/state/meta-reducers';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ItemsModule,
    StoreModule.forRoot({ items: itemReducer }, {
      initialState: loadState(),   
      metaReducers,            
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
