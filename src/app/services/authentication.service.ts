import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Agent } from '../models/agent.model';
import { Staff } from '../models/staff.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../endpoints/endpoints.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });
  
  connectedCustomer: Customer;
    constructor(private _httpService: HttpClient, private endpoints: EndpointsService) {}

    loginAuthentication(customer:Customer): Observable<any>{
      let body = JSON.parse(JSON.stringify(customer));
      return this._httpService.post(this.endpoints.LOGIN_USER, body);
    }

    register(customer: Customer) {

      return this._httpService.post(this.endpoints.REGISTER_USER, customer);

    } 

    loginAgent(agent:Agent): Observable<any>{
      let body = JSON.parse(JSON.stringify(agent));
      return this._httpService.post(this.endpoints.LOGIN_AGENT, body);
    }

    registerAgent(agent: Agent) {
      console.log(agent);
      return this._httpService.post(this.endpoints.REGISTER_AGENT, agent);

    } 

    loginStaff(staff:Staff): Observable<any>{
      let body = JSON.parse(JSON.stringify(staff));
      return this._httpService.post(this.endpoints.LOGIN_STAFF, body);
    }

    registerStaff(staff: Staff) {

      return this._httpService.post(this.endpoints.REGISTER_STAFF, staff);

    } 
  
    // setConnectedCustomer(customer) {
    //   this.connectedCustomer = customer;
    //   localStorage.setItem('connectedCustomer',JSON.stringify(customer));
  
    // }

    // reset(email: String): Observable<any> {
    //   const customer = {
    //     email: email
    //   };
    //   return this._httpService.post<Customer>(this.endpoints.RESET_PASSWORD, customer);

    // }
}