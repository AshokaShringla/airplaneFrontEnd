import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';
import { AuthenticationService } from './authentication.service';
// import { setInjectImplementation } from '@angular/core/src/di/injector_compatibility';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private _authenticationService: AuthenticationService) { }

  private tokenRole:string = "tokenRole";
  private tokenEmail:string = "tokenEmail";
  private tokenPassword:string = 'tokenPassword'
  statusMessage: string

    store(customer:Customer) {
        localStorage.setItem(this.tokenRole, "Customer");
        localStorage.setItem(this.tokenEmail, customer.customerEmail);
        localStorage.setItem(this.tokenPassword, customer.password)
        localStorage.setItem("login","true")
        this.setUser(customer);
    }

    getRole() {
      return localStorage.getItem(this.tokenRole)
    }

    getEmail() {
      return localStorage.getItem(this.tokenEmail)
    }

    getPass(){
      return localStorage.getItem(this.tokenPassword)
    }

    clear() {
        localStorage.removeItem(this.tokenRole);
        localStorage.removeItem(this.tokenEmail);
        localStorage.removeItem(this.tokenPassword)
        localStorage.setItem("login","false")
    }

    private customer = new Customer;

    private check = new Customer;

    setUser(customer: Customer) {
      this.check = customer;
    }

    checkUser(customer: Customer){
      this._authenticationService.loginAuthentication(customer).subscribe(customerData =>{
        this.check = <Customer>customerData;
        console.log(this.check);
        this.setUser(this.check)},
        error => this.statusMessage = "Error"
        )
    }

    getUser(){

      this.customer.customerEmail = localStorage.getItem(this.tokenEmail)
      this.customer.password = localStorage.getItem(this.tokenPassword)

      console.log("hello")
      


      this.checkUser(this.customer)

      console.log("hello")
      console.log(this.check.customerEmail)
      console.log(this.check.password)

      if(this.check.customerEmail == this.customer.customerEmail
          && this.check.password == this.customer.password){
          this.check = new Customer;
          return this.customer
      }
      else{
        this.check = new Customer;
        return null;
      }

    }

    clearUser(){
      this.customer = new Customer;
    }
}