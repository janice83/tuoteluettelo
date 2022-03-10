import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'item/:id', component: ItemComponent },
  { path: 'item-list', component: ItemListComponent },
  { path: '', redirectTo: '/item-list', pathMatch: 'full'}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

