import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFavoritesComponent } from './my-favorites.component';

const routes: Routes = [{ path: '', component: MyFavoritesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFavoritesRoutingModule { }
