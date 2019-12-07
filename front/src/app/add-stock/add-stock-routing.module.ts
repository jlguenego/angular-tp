import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  { path: 'add-stock/form', component: FormComponent },
  { path: 'add-stock/success', component: SuccessComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStockRoutingModule {}
