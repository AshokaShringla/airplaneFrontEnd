import { Injectable } from '@angular/core';
import { Customer } from '../models/customer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
// import { setInjectImplementation } from '@angular/core/src/di/injector_compatibility';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor() { }

  private tokenKeyRole:string = "tokenKeyRole";
  private tokenKeyId:string = "tokenKeyId";
  // private tokenKeyFullName:string = "tokenKeyFullName";
  // private tokenKeyEmail:string = "tokenKeyEmail";

    store(customer:Customer) {
        localStorage.setItem(this.tokenKeyRole, "Customer");
        localStorage.setItem(this.tokenKeyId, customer.customerEmail);
        this.setUser(customer);
        // localStorage.setItem(this.tokenKeyFullName, user.firstName+" "+user.lastName);
        // localStorage.setItem(this.tokenKeyEmail, user.email);
        console.log("REMEMBER TO REMOVE THE BELOW LINES IN CONTEXT.SERVICE.TS")
        console.log("Stored Role: "+localStorage.getItem(this.tokenKeyRole)+" and ID: "+localStorage.getItem(this.tokenKeyId));
    }

    retrieveTokenRole() {
        let storedTokenRole:string = localStorage.getItem(this.tokenKeyRole);
        return storedTokenRole;
    }

    retrieveTokenId() {
        let storedTokenId:number = parseInt(localStorage.getItem(this.tokenKeyId));
        return storedTokenId;
    }

    clear() {
        localStorage.removeItem(this.tokenKeyRole);
        localStorage.removeItem(this.tokenKeyId);
        // localStorage.removeItem(this.tokenKeyFullName);
        // localStorage.removeItem(this.tokenKeyEmail);
        localStorage.setItem("login","false")
    }

    private customer = new Customer;

    setUser(customer: Customer) {
        this.customer = customer;
    }

    clearUser(){
      this.customer = new Customer;
    }

    getUser():Customer {
      console.log(localStorage.getItem(this.tokenKeyId))
        this.customer.customerEmail = localStorage.getItem(this.tokenKeyId);
        return this.customer;
    }
}