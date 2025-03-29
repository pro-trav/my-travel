import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'new',
    loadChildren: () => import('./new/new.module').then((m) => m.NewModule),
  },
  {
    path: 'trips',
    loadChildren: () =>
      import('./my-trips/my-trips.module').then((m) => m.MyTripsModule),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./my-favorites/my-favorites.module').then(
        (m) => m.MyFavoritesModule
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'cash-advance',
    loadChildren: () =>
      import('./my-cash-advance/my-cash-advance.module').then(
        (m) => m.MyCashAdvanceModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
