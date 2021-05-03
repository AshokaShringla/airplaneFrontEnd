import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-myflights',
  templateUrl: './myflights.component.html',
  styleUrls: ['./myflights.component.css']
})
export class MyflightsComponent implements OnInit {

  flights:Flight[];
  statusMessage: string
  flight = new Flight();
  email: String;
  customer: Customer;

  usertype: string
  loggedIn: boolean

  constructor(    private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService) { }

  ngOnInit(): void {
    if(localStorage.getItem("login") == "true"){
      this.customer = new Customer;
      this.customer.customerEmail = this._contextService.getEmail()
      this.getcFlights();
    }
  }

  getcFlights():void
  {
    console.log("Got a post");
    console.log(this.customer.customerEmail);
    this._flightService.getcFlights(this.customer.customerEmail)
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  getFlightsAirline():void{

  }
}

