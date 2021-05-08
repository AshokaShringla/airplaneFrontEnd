import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Airport } from 'src/app/models/airport.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createairport',
  templateUrl: './createairport.component.html',
  styleUrls: ['./createairport.component.css']
})
export class CreateairportComponent implements OnInit {

  airport = new Airport();

  constructor( private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService, private toastr: ToastrService) { }

  ngOnInit(): void {

    if(this._contextService.getRole() != "Staff"){
      this.router.navigateByUrl('login');
    }

  }

  createAirport(){
    this._flightService.createAirport(this.airport)
    .subscribe((data) => {      this.airport = data;
      this.toastr.success("Airport Created!", "Notification")
                                },
                                (error) => {console.log(error);
                                }
    );
  }

}
