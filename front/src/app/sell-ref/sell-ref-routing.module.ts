import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SellComponent } from './sell/sell.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'sell-ref/list', component: ListComponent },
  { path: 'sell-ref/sell', component: SellComponent },
  { path: 'sell-ref/success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellRefRoutingModule {}
