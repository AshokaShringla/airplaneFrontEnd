import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-agenttickets',
  templateUrl: './agenttickets.component.html',
  styleUrls: ['./agenttickets.component.css']
})
export class AgentticketsComponent implements OnInit {

  id: number;
  flights: Flight[];

  constructor(private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService) { }

  ngOnInit(): void {
    this.id = this._contextService.getBid();
    this.getFlights();
  }

  getFlights():void
  {
    this._flightService.viewAgent(this.id)
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                }
    );
  }

}
