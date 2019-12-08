import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { ErrorComponent } from './routes/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal', component: LegalComponent },
  { path: 'error', component: ErrorComponent },
  {
    path: 'add-stock',
    loadChildren: () =>
      import('./add-stock/add-stock.module').then(m => m.AddStockModule),
  },
  {
    path: 'sell-ref',
    loadChildren: () =>
      import('./sell-ref/sell-ref.module').then(m => m.SellRefModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
