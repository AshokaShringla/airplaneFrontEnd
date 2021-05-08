import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../../services/context.service';
import { Flight } from '../../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../../models/customer.model';
import { Payment } from '../../../models/payment.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-buybticket',
  templateUrl: './buybticket.component.html',
  styleUrls: ['./buybticket.component.css']
})
export class BuybticketComponent implements OnInit {
  
    statusMessage: string
    flight = new Flight();
    customer: Customer;
    payment: Payment;
  
    usertype: string
  
    email: string;
    bid: number;
  
    constructor(    private router:Router,
      private _flightService:FlightService,
      private _contextService:ContextService, private toastr: ToastrService) { }
  
    ngOnInit(): void {
      if(localStorage.getItem("login") == "true"){
        this.customer = new Customer;
        this.customer.customerEmail = this.email;
        this.saveFlight();
        this.payment = new Payment();
        this.getBid();
        console.log(this.bid)
      }
      else{
        this.router.navigate(['login'])
      }
    }
  
    saveFlight(){
      this.flight = this._flightService.getFlight();
      this.flight.bPrice = this.flight.bPrice * 1.1;
      this._flightService.clearFlight();
    }
  
    getBid(){
      this.bid = this._contextService.getBid();
    }
  
    buy(){
  
      console.log(this.payment)
  
      this._flightService.addPayment(this.payment)
      .subscribe((payment) => {this.payment = <Payment> payment; 
        this._flightService.buyTicket(this.flight, this.email, this.payment.id, this.bid)
        .subscribe((flight) => {console.log(flight); 
          this.toastr.success("Booked Ticket!", "Notification")
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


