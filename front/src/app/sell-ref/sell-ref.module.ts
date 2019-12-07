import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRefRoutingModule } from './sell-ref-routing.module';
import { ListComponent } from './list/list.component';
import { SellComponent } from './sell/sell.component';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ListComponent, SellComponent, SuccessComponent],
  imports: [
    CommonModule,
    SellRefRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class SellRefModule {}
