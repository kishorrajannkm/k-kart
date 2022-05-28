import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemsComponent } from './items/items.component';
import { MaterialModule } from '../components/core/material-module';
import { ItemListComponent } from './item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { SearchTextPipe } from '../shared/search-text.pipe';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemListComponent,
    ItemDetailsComponent,
    SearchTextPipe
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: []
})
export class ItemsModule {
}
