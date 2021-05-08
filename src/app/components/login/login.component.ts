import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { Agent } from '../../models/agent.model';
import { Staff } from 'src/app/models/staff.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  customerToLog = new Customer();
  loggedCustomer = new Customer();

  agent = new Agent();
  agent1 = new Agent();

  staff = new Staff();
  staff1 = new Staff();

  statusMessage:string;
  userType:string;

  constructor(
    private router:Router,
    private _authenticationService:AuthenticationService,
    // public _appComponent:AppComponent,
    private _contextService:ContextService, private toastr: ToastrService
  ) { }

  ngOnInit() {}

  loginSubmit() {

    console.log(this.customerToLog);
    this._authenticationService.loginAuthentication(this.customerToLog).subscribe((customerData) => {
        this.loggedCustomer = <Customer> customerData; this.loginAuthorization(this.loggedCustomer);
      }
    ),
    (error) => {
      console.log(error);
      this.statusMessage = "Problem with service. Please try again later.";
    }
  }

  loginAuthorization(customer: Customer){
    if (customer != null) {
      
      this._contextService.storeCust(customer);
      console.log("Set customer");
      console.log(this.loggedCustomer);
      this.toastr.success("Customer Login Successful", "Notification")
      setTimeout(() => this.router.navigateByUrl('customerhome'),1500);
    } else {
      this.toastr.error("Customer Login Failed", "Notification");
      this.reset();
      
    }
  }

  loginAgent() {
    this._authenticationService.loginAgent(this.agent).subscribe((agentData) => {
        this.agent1 = <Agent> agentData; this.loginAgent1(this.agent1);
      }
    ),
    (error) => {
      console.log(error);
      this.statusMessage = "Problem with service. Please try again later.";
    }
  }

  loginAgent1(agent: Agent){
    if (agent != null) {
      this._contextService.storeAgent(agent);
      this.toastr.success("Agent Login Successful", "Notification")
      setTimeout(() => this.router.navigateByUrl('agenthome'),1500);
    } else {
      this.reset();
      this.toastr.error("Agent Login Failed", "Notification");
    }
  }

  loginStaff() {
    this._authenticationService.loginStaff(this.staff).subscribe((staffData) => {
        this.staff1 = <Staff> staffData; this.loginStaff1(this.staff1);
      }
    ),
    (error) => {
      console.log(error);
      this.statusMessage = "Problem with service. Please try again later.";
    }
  }

  loginStaff1(staff: Staff){
    if (staff != null) {
      this._contextService.storeStaff(staff);
      this.toastr.success("Staff Login Successful", "Notification")
      setTimeout(() => this.router.navigateByUrl('staffhome'),1500);
    } else {
      this.reset();
      this.toastr.error("Staff Login Failed", "Notification");
    }
  }

  private reset(){
    this.customerToLog.customerEmail = null;
    this.customerToLog.password = null;
  }

  isCustomer(){
    if (this.userType == "customer"){
      return true;
    }
    else {
      return false;
    }
  }

  isAgent(){
    if (this.userType == "agent"){
      return true;
    }
    else {
      return false;
    }
  }

  isStaff(){
    if (this.userType == "staff"){
      return true;
    }
    else {
      return false;
    }
  }

}