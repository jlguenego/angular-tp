import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRefRoutingModule } from './sell-ref-routing.module';
import { ListComponent } from './list/list.component';
import { SellComponent } from './sell/sell.component';
import { SuccessComponent } from './success/success.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListComponent, SellComponent, SuccessComponent],
  imports: [CommonModule, SellRefRoutingModule, ReactiveFormsModule],
})
export class SellRefModule {}
