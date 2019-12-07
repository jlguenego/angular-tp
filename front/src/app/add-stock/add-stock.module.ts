import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStockRoutingModule } from './add-stock-routing.module';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [FormComponent, SuccessComponent],
  imports: [
    CommonModule,
    AddStockRoutingModule
  ]
})
export class AddStockModule { }
