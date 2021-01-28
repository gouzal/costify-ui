import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShippingCompanyModel } from '../models/ShippingCompanyModel';

@Injectable({
  providedIn: 'root'
})
export class ShippingCompanyServiceService {

  constructor(private http: HttpClient) {}
  getShippingCompanies() {
    return this.http.get('/src/data/shippingcompanies.json')
                .toPromise()
                .then(res => <ShippingCompanyModel[]> res.data)
                .then(data => { return data; });
}
}
