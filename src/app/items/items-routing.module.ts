import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  {
    path: '',
    component: ItemsComponent
  },
  {
    path: 'list',
    component: ItemListComponent
  },
  {
    path: 'item-details/:id',
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }
