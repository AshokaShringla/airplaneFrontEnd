import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';

@Component({
  selector: 'app-customerhome',
  templateUrl: './customerhome.component.html',
  styleUrls: ['./customerhome.component.css']
})
export class CustomerhomeComponent implements OnInit {

  customer: Customer;

  constructor(    private router:Router,
    private _contextService:ContextService) { }

  ngOnInit(): void {
    if(localStorage.getItem("login") == "true"){

      this.customer = new Customer;

      console.log("here1")
      this.customer.customerEmail = this._contextService.getEmail();
      this.customer.password = this._contextService.getPass();
      console.log("here")
    }
  }

}
