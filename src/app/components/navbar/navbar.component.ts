import { Component, OnInit } from '@angular/core';
import { ContextService } from 'src/app/services/context.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userType: string;

  constructor(private _contextService:ContextService) { }

  ngOnInit(): void {
  }

  ifLoggedIn(){
    if( localStorage.getItem("login")=="true"){
      if(localStorage.getItem("customer") == "true"){
        this.userType = "customer"
      }
      else if (localStorage.getItem("agent")=="true"){
        this.userType = "Booking agent"
      }
      else if (localStorage.getItem("staff")=="true"){
        this.userType = "Airline staff"
      }
      return true;
    }
    else{
      return false;
    }
  }

  ifCustomer(){
    if(this.userType = "customer"){
      return true;
    }
    else{
      return false;
    }
  }

  logout(){
    this._contextService.clear();
    this._contextService.clearUser();
  }

}


