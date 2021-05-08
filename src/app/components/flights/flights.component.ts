import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { Flight } from '../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../models/customer.model';
import { BuycflightComponent } from '../customerhome/buycflight/buycflight.component'

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  flights:Flight[];
  statusMessage: string
  flight = new Flight();

  constructor(    private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService) { }

  ngOnInit(): void {
    this.getFlights();

  }

  getFlights():void
  {
    this._flightService.getFlights()
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  getFlightsSearch():void{

    if(this.flight.dAirport == ""){
      this.flight.dAirport = null;
    }

    if(this.flight.aAirport == ""){
      this.flight.aAirport = null;
    }

    this._flightService.getFlightsSearch(this.flight)
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  statusFlight = new Flight();
  ddate: boolean;

  getFlightStatus():void{

    this._flightService.getFlightStatus(this.statusFlight)
    .subscribe((status) => {this.statusFlight = status; this.result = true;},
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service";
                                this.result = false;
                                }
    );
  }

  dateType: string;
  result: boolean;

  ifd(){
    if (this.dateType == "Departure"){
      return true;
    }
    else if (this.dateType == "Arrival"){
      return false;
  }
  }

  ifLoggedIn(){
    if( localStorage.getItem("login")=="true"){
      if(this._contextService.getRole() == "Staff"){
        return false;
      }
      return true;
    }
    else{
      return false;
    }
  }

  buyTicket(flight: Flight){
    this._flightService.setFlight(flight);

    if(this._contextService.getRole() == "Agent"){
      this.router.navigate(['buybflight'])
    }
  else{
    this.router.navigate(['buyflight'])
  }
    
  }


}
