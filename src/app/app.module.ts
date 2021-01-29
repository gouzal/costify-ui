import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShippingCompanyComponent } from './shipping-company/shipping-company.component';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    ShippingCompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
