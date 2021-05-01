import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private email;
  private password;
  customerToLog = new Customer();
  loggedCustomer = new Customer();
  statusMessage:string;

  constructor(
    private router:Router,
    private _authenticationService:AuthenticationService,
    // public _appComponent:AppComponent,
    private _contextService:ContextService
  ) { }

  ngOnInit() {
    console.log("login Init role: "+this._contextService.retrieveTokenRole()); 
    if (this._contextService.retrieveTokenRole() != null) {
      this.router.navigateByUrl('reports');
    }
  }

  loginSubmit() {
    console.log("Email: "+this.customerToLog.customerEmail);
    console.log("Password: "+this.customerToLog.password);

    this._authenticationService.loginAuthentication(this.customerToLog).subscribe((customerData) => {
        this.loggedCustomer = <Customer>customerData; this.loginAuthorization(this.loggedCustomer);
      }
    ),
    (error) => {
      console.log(error);
      this.statusMessage = "Problem with service. Please try again later.";
    }
  }

  loginAuthorization(customer: Customer){
    if (customer != null) {
      this._contextService.store(customer);
      console.log("Set customer");
      console.log(this.loggedCustomer);
      localStorage.setItem("login","true")
      this.router.navigateByUrl('reports')
    } else {
      this.reset();
    }
  }

  private reset(){
    this.customerToLog.customerEmail = null;
    this.customerToLog.password = null;
  }

}