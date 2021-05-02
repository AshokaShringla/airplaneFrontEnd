import { Injectable } from '@angular/core';
import { Flight } from '../models/flight.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../endpoints/endpoints.service';

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

}


