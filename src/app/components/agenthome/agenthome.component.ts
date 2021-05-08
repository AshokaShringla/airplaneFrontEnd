import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContextService } from '../../services/context.service';
import { Flight } from '../../models/flight.model';
import { FlightService } from 'src/app/services/flight.service';
import { Customer } from '../../models/customer.model';
import { Payment } from '../../models/payment.model';

@Component({
  selector: 'app-agenthome',
  templateUrl: './agenthome.component.html',
  styleUrls: ['./agenthome.component.css']
})
export class AgenthomeComponent implements OnInit {

  statusMessage: string
  flight = new Flight();
  customer: Customer;
  payment: Payment;

  usertype: string

  email: string;
  bid: number;

  constructor() { }

  ngOnInit(): void {
  }


}
