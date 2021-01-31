import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingCompanyModel } from '../models/ShippingCompanyModel';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyService {
  apiHost: string = environment.apiHost;

  constructor(private http: HttpClient) {}
  getShippingCompanies() {

    // return this.http.get('/src/data/shippingcompanies.json')
    //             .toPromise()
    //             .then(res => <ShippingCompanyModel[]> res)
    //             .then(data => { return data; });

        console.log(`${this.apiHost}/shipping-companies`);
        return this.http.get<any[]>(`${this.apiHost}/shipping-companies`);
        // return this.http.get<any[]>(`assets/data/shippingcompanies.json`);

}
}
