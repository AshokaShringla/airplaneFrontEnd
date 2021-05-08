import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { Agent } from '../../models/agent.model';
import { Staff } from 'src/app/models/staff.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  customer = new Customer();

  agent = new Agent();

  staff = new Staff();

  secondpassword: string;

  userType: string;

  constructor(    private router:Router,
    private _authenticationService:AuthenticationService,
    // public _appComponent:AppComponent,
    private _contextService:ContextService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.customer.password != this.secondpassword){
      console.log("False")
    }
    else{
    this._authenticationService.register(this.customer).subscribe((customerData) => {
        this.customer = <Customer> customerData;
        this._contextService.storeCust(this.customer);
        this.toastr.success("Customer Registration Successful", "Notification")
        setTimeout(() => this.router.navigateByUrl('customerhome'),1500);
      }
    ),
    (error) => {
      console.log(error);
    }
  }
}

registerAgent() {
  if (this.agent.password != this.secondpassword){

  }
  else{
  this._authenticationService.registerAgent(this.agent).subscribe((agentData) => {
      this.agent = <Agent> agentData;
      this._contextService.storeAgent(this.agent);
      this.toastr.success("Agent Registration Successful", "Notification")
      setTimeout(() => this.router.navigateByUrl('agenthome'),1500);
    }
  ),
  (error) => {
    console.log(error);
  }
}
}

registerStaff() {
  if (this.staff.password != this.secondpassword){

  }
  else{
  this._authenticationService.registerStaff(this.staff).subscribe((staffData) => {
      this.staff = <Staff> staffData;
      this._contextService.storeStaff(this.staff);
      this.toastr.success("Staff Registration Successful", "Notification")
      setTimeout(() => this.router.navigateByUrl('staffhome'),1500);
    }
  ),
  (error) => {
    console.log(error);
  }
}
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
