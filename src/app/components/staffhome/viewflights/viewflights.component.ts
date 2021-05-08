import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-viewflights',
  templateUrl: './viewflights.component.html',
  styleUrls: ['./viewflights.component.css']
})
export class ViewflightsComponent implements OnInit {

  flights:Flight[];
  statusMessage: string
  flight = new Flight();

  airline:string;

  passengers:string[];

  constructor(    private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService, private toastr: ToastrService) { }

    ngOnInit(): void {
      this.airline = this._contextService.getAirline();
      this.getFlights();
      this.view = false;

      if(this._contextService.getRole() != "Staff"){
        this.router.navigateByUrl('login');
      }

    }
  
  getFlights():void
  {

    console.log(this.airline)

    this._flightService.getFlightAirline(this.airline)
    .subscribe((flightData) => this.flights = flightData,
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  view: boolean;

  seePassengers(id: number){
    this._flightService.getFlightPassengers(id)
    .subscribe((passengers) => {this.passengers = passengers;
                                this.view = true;
                                },
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

  updateStatus(id: number, status:string){
      this._flightService.updateFlight(id, status)
      .subscribe((data) => {
        this.toastr.success("Status Updated!", "Notification")
        setTimeout(() => location.reload(),1500);
                                  },
                                  (error) => {console.log(error);
                                  this.statusMessage = "Problem with service"
                                  }
      );
    }

  createFlight(){

    this.flight.airline = this.airline;

    this._flightService.createFlight(this.flight)
    .subscribe((data) => {      this.flight = data;
      this.toastr.success("Flight Created!", "Notification")
      setTimeout(() => location.reload(),1500);
                                },
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service"
                                }
    );
  }

}
