import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { ObjectUnsubscribedError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../components/login/login.component';
import { AuthenticationService } from './authentication.service';
import { Agent } from '../models/agent.model';
import { Staff } from '../models/staff.model';
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

    storeCust(customer:Customer) {
        localStorage.setItem(this.tokenRole, "Customer");
        localStorage.setItem(this.tokenEmail, customer.customerEmail);
        localStorage.setItem(this.tokenPassword, customer.password)
        localStorage.setItem("login","true")
    }

    storeAgent(agent:Agent) {
      localStorage.setItem(this.tokenRole, "Agent");
      localStorage.setItem(this.tokenEmail, agent.email);
      localStorage.setItem(this.tokenPassword, agent.password)
      localStorage.setItem("login","true")
      this.setBid(agent.id)
  }

  storeStaff(staff:Staff) {
    localStorage.setItem(this.tokenRole, "Staff");
    localStorage.setItem(this.tokenEmail, staff.username);
    localStorage.setItem(this.tokenPassword, staff.password)
    localStorage.setItem("login","true")
    this.setAirline(staff.airline)
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

    setBid(bid: number){
      localStorage.setItem("bid", bid.toString())
    }

    getBid(){
      return parseInt(localStorage.getItem("bid"));
    }

    setAirline(airline: string){
      localStorage.setItem("airline", airline);
    }

    getAirline(){
      return localStorage.getItem("airline");
    }

    clear() {
        localStorage.removeItem(this.tokenRole);
        localStorage.removeItem(this.tokenEmail);
        localStorage.removeItem(this.tokenPassword)
        localStorage.setItem("login","false")
        localStorage.removeItem("bid")
        localStorage.removeItem("airline")
    }

    private check = new Customer();

    authCust(customer: Customer){
      this._authenticationService.loginAuthentication(customer).subscribe(customerData => {
        this.check = <Customer> customerData;
        if(this.check.customerEmail == customer.customerEmail && this.check.password == customer.password){
          return true;
        }
        else{
          return false;
        }
        }, error => {return false;})
    }
    

    // setUser(customer: Customer) {
    //   this.check = customer;
    // }

    // checkUser(customer: Customer){
    //   this._authenticationService.loginAuthentication(customer).subscribe(customerData =>{
    //     this.check = <Customer>customerData;
    //     console.log(this.check);
    //     this.setUser(this.check)},
    //     error => this.statusMessage = "Error"
    //     )
    // }

    // getUser(){

    //   this.customer.customerEmail = localStorage.getItem(this.tokenEmail)
    //   this.customer.password = localStorage.getItem(this.tokenPassword)

    //   console.log("hello")
      


    //   this.checkUser(this.customer)

    //   console.log("hello")
    //   console.log(this.check.customerEmail)
    //   console.log(this.check.password)

    //   if(this.check.customerEmail == this.customer.customerEmail
    //       && this.check.password == this.customer.password){
    //       this.check = new Customer;
    //       return this.customer
    //   }
    //   else{
    //     this.check = new Customer;
    //     return null;
    //   }

    // }

    // clearUser(){
    //   this.customer = new Customer;
    // }
}