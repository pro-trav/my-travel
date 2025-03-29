import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AllComponent } from './all/all.component';
import { MyDraftsComponent } from './my-drafts/my-drafts.component';

export const childRoutes: Routes = [
  {
    path: 'all',
    component: AllComponent,
    data: { title: 'Trip History' },
  },
  {
    path: 'drafts',
    component: MyDraftsComponent,
    data: { title: 'Drafts' },
  },
];
@NgModule({
  declarations: [HomeComponent, AllComponent, MyDraftsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: childRoutes[0].path,
          },
          ...childRoutes,
        ],
      },
    ]),
  ],
})
export class MyTripsModule {}
