import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRefRoutingModule } from './sell-ref-routing.module';
import { ListComponent } from './list/list.component';
import { SellComponent } from './sell/sell.component';
import { SuccessComponent } from './success/success.component';


@NgModule({
  declarations: [ListComponent, SellComponent, SuccessComponent],
  imports: [
    CommonModule,
    SellRefRoutingModule
  ]
})
export class SellRefModule { }
