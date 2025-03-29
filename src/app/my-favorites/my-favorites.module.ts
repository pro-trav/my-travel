import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { TravelersComponent } from './travelers/travelers.component';
import { MfksComponent } from './mfks/mfks.component';

export const childRoutes: Routes = [
  {
    path: 'travelers',
    component: TravelersComponent,
    data: { title: 'My Travelers' },
  },
  {
    path: 'mfks',
    component: MfksComponent,
    data: { title: 'Favorite MFKs' },
  },
];

@NgModule({
  declarations: [HomeComponent, TravelersComponent, MfksComponent],
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
export class MyFavoritesModule {}
