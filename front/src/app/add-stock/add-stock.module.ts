import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AddStockRoutingModule } from './add-stock-routing.module';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormComponent, SuccessComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddStockRoutingModule,
    FontAwesomeModule,
  ]
})
export class AddStockModule { }
