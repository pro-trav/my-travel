import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCashAdvanceComponent } from './my-cash-advance.component';

const routes: Routes = [{ path: '', component: MyCashAdvanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyCashAdvanceRoutingModule { }
