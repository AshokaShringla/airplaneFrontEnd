import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Airport } from 'src/app/models/airport.model';
import { Airplane } from 'src/app/models/airplane.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-createplane',
  templateUrl: './createplane.component.html',
  styleUrls: ['./createplane.component.css']
})
export class CreateplaneComponent implements OnInit {

  airplane = new Airplane();
  airplanes: Airplane[];
  airline:string;

  constructor(private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.airline = this._contextService.getAirline();
    this.getAirplanes();
    if(this._contextService.getRole() != "Staff"){
      this.router.navigateByUrl('login');
    }

  }

  createAirplane(){
    this.airplane.airline = this.airline;
    this._flightService.createAirplane(this.airplane)
    .subscribe((data) => {      this.airplane = data;
      this.toastr.success("Airplane Created!", "Notification")
      setTimeout(() => location.reload(),1500);
                                },
                                (error) => {console.log(error);
                                }
    );
  }

  getAirplanes(){
    this._flightService.viewAirplanes(this.airline)
    .subscribe((data) => {      this.airplanes = data;
                                },
                                (error) => {console.log(error);
                                }
    );
  }



}
