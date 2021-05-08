import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../../models/customer.model';
import { Payment } from '../../../models/payment.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buycflight',
  templateUrl: './buycflight.component.html',
  styleUrls: ['./buycflight.component.css']
})
export class BuycflightComponent implements OnInit {

  statusMessage: string
  flight = new Flight();
  customer: Customer;
  payment: Payment;

  usertype: string

  constructor(    private router:Router,
    private _flightService:FlightService,
    private _contextService:ContextService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    if(localStorage.getItem("login") == "true"){
      this.customer = new Customer;
      this.customer.customerEmail = this._contextService.getEmail()
      this.saveFlight();
      this.payment = new Payment();
    }
    else{
      this.router.navigate(['login'])
    }
  }

  saveFlight(){
    this.flight = this._flightService.getFlight();
    this._flightService.clearFlight();
    console.log(this.flight);
  }

  buy(){

    console.log(this.payment)

    this._flightService.addPayment(this.payment)
    .subscribe((payment) => {this.payment = <Payment> payment; 
      this._flightService.buyTicket(this.flight, this.customer.customerEmail, this.payment.id, 0)
      .subscribe((flight) => {console.log(flight); 
        this.toastr.success("Bought Ticket!", "Notification")
      },
                                  (error) => {console.log(error);
                                  this.statusMessage = "Problem with service";
                                  }
      );
  
    },
                                (error) => {console.log(error);
                                this.statusMessage = "Problem with service";
                                }
    );

  }

}
