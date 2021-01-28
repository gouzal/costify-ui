import { ShippingCompanyService } from './../services/shipping-company.service';
import { ShippingCompanyModel } from './../models/ShippingCompanyModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrls: ['./shipping-company.component.css']
})
export class ShippingCompanyComponent implements OnInit {
   shippingCompanies : ShippingCompanyModel[]=[];
  constructor(private shippingCompanyService :ShippingCompanyService) { }

  ngOnInit(): void {
    //this.shippingCompanies = this.shippingCompanyService.getShippingCompanies();
    for (let i = 1; i < 10; i++) {
      this.shippingCompanies.push({
        id: i,
        name: 'name' + i,
      });
    }
  }

}
