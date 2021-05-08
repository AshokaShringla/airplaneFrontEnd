import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userType: string;

  constructor(private _contextService:ContextService,
    private router:Router, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  ifLoggedIn(){
    if( localStorage.getItem("login")=="true"){
      return true;
    }
    else{
      return false;
    }
  }

  ifCustomer(){
    if(this._contextService.getRole() == "Customer"){
      this.userType = "Customer";
      return true;
    }
    else{
      return false;
    }
  }

  ifAgent(){
    if(this._contextService.getRole() == "Agent"){
      this.userType = "Agent";
      return true;
    }
    else{
      return false;
    }
  }

  ifStaff(){
    if(this._contextService.getRole() == "Staff"){
      this.userType = "Staff";
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this._contextService.clear();
    this.userType = undefined;
    this.toastr.success("Logout Successful", "Notification")
  }

}


