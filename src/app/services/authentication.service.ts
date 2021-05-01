import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { EndpointsService } from '../constants/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  connectedCustomer: Customer;
    constructor(private _httpService: HttpClient) {}

    loginAuthentication(customer:Customer): Observable<any>{
      let body = JSON.parse(JSON.stringify(customer));
      console.log(body);
      // Remember to change URL


      return this._httpService.post(, body);

    }

    register(customer: Customer) {
      console.log("Before enter register");

      return this._httpService.post(this.endpoints.REGISTER_CUS, customer);

    } 
  
    setConnectedCustomer(customer) {
      this.connectedCustomer = customer;
      localStorage.setItem('connectedCustomer',JSON.stringify(customer));
  
    }

    reset(email: String): Observable<any> {
      const customer = {
        email: email
      };
      return this._httpService.post<Customer>(this.endpoints.RESET_PASSWORD, customer);

    }
}