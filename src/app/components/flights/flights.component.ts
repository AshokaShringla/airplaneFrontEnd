import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { Flight } from '../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../models/customer.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

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
      this.loggedIn = true
      this.customer = this._contextService.getUser();
      this.email = this.customer.customerEmail;
      this.getFlights();
      
    }

  }

  getFlights():void
  {
    console.log("Got a post");
    this._flightService.getFlights()
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  getFlightsAirline():void{
    console.log("airline: "+this.flight.airline);
    console.log("d: "+this.flight.dAirport);
    console.log("a: "+this.flight.aAirport);
  }



}
