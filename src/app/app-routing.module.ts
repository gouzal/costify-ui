import { ShippingCompanyComponent } from './shipping-company/shipping-company.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'shipping', component: ShippingCompanyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
