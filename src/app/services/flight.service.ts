import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Payment } from '../models/payment.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../endpoints/endpoints.service';
import { Airplane } from '../models/airplane.model';
import { Airport } from '../models/airport.model';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  
  private readonly HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private _httpService: HttpClient, private endpoints: EndpointsService) { }

  getFlights(): Observable<any>{
    return this._httpService.get(this.endpoints.GET_FLIGHTS);
  }

  getcFlights(email: String): Observable<any>{
    return this._httpService.get(this.endpoints.GET_CFLIGHTS + '/' + email)
  }

  getFlightsSearch(flight: Flight): Observable<any>{
    return this._httpService.post(this.endpoints.GET_FLIGHTS_SEARCH, flight)
  }

  getFlightStatus(flight: Flight): Observable<any>{
    return this._httpService.post(this.endpoints.GET_FLIGHTS_STATUS, flight)
  }

  getFlightAirline(airline: string): Observable<any>{
    return this._httpService.get(this.endpoints.GET_FLIGHTS_AIRLINE + '/' + airline)
  }

  getFlightPassengers(id: number): Observable<any>{
    return this._httpService.get(this.endpoints.GET_FLIGHTS_PASSENGERS + '/' + id)
  }

  createFlight(flight:Flight): Observable<any>{
    return this._httpService.post(this.endpoints.CREATE_FLIGHT, flight)
  }

  updateFlight(id: number, status: string): Observable<any>{
    return this._httpService.get(this.endpoints.UPDATE_STATUS + '/' + id + '/' + status)
  }

  createAirplane(airplane:Airplane): Observable<any>{
    return this._httpService.post(this.endpoints.CREATE_AIRPLANE, airplane)
  }

  createAirport(airport:Airport): Observable<any>{
    return this._httpService.post(this.endpoints.CREATE_AIRPORT, airport)
  }

  viewAirplanes(airline:string): Observable<any>{
    return this._httpService.get(this.endpoints.GET_AIRPLANES + '/' + airline)
  }

  viewAgent(id:number): Observable<any>{
    return this._httpService.get(this.endpoints.GET_FLIGHTS_AGENT + '/' + id)
  }



  private flight: Flight;

  setFlight(flight: Flight){
    this.flight = flight;
  }

  getFlight(){
    return this.flight;
  }

  clearFlight(){
    this.flight = new Flight();
  }

  addPayment(payment: Payment){
    return this._httpService.post(this.endpoints.ADD_PAYMENT, payment)
  }

  buyTicket(flight: Flight, email:String, id:number, bid:number){
    return this._httpService.post(this.endpoints.BUY_TICKET + '/' + email + '/' + id + '/' + bid, flight)
  }

}


