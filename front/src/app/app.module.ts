import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { AddStockModule } from './add-stock/add-stock.module';
import { SellRefModule } from './sell-ref/sell-ref.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LegalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AddStockModule,
    SellRefModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
