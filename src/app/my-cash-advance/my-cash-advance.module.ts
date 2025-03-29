import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyCashAdvanceRoutingModule } from './my-cash-advance-routing.module';
import { MyCashAdvanceComponent } from './my-cash-advance.component';


@NgModule({
  declarations: [
    MyCashAdvanceComponent
  ],
  imports: [
    CommonModule,
    MyCashAdvanceRoutingModule
  ]
})
export class MyCashAdvanceModule { }
