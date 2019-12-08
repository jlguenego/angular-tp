import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeComponent } from './routes/home/home.component';
import { LegalComponent } from './routes/legal/legal.component';
import { AddStockModule } from './add-stock/add-stock.module';
import { SellRefModule } from './sell-ref/sell-ref.module';
import { HttpClientModule } from '@angular/common/http';
import { ReferenceService } from './services/reference.service';
import { HttpReferenceService } from './services/http-reference.service';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent, HomeComponent, LegalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    AddStockModule,
    SellRefModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr',
    },
    {
      provide: ReferenceService,
      useClass: HttpReferenceService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
