import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** Accessible back-end endpoints */
@Injectable({
   providedIn: 'root'
})
export class EndpointsService {
   /** Base URL to add endpoints to, obtained from ENV */
   //public readonly baseURL = environment.cms_url;   // CHANGE TO HOST
   public readonly baseURL = "http://localhost:8080/";
   public readonly authURL = "http://localhost:8080/"; 
   /** Base authentication service URL to add endpoints to, obtained from ENV */
   //public readonly authURL = environment.userws_url; 

   /** Register User */
   public readonly REGISTER_USER: string = this.authURL + 'customers/register';
   /** Login User*/
   public readonly LOGIN_USER: string = this.authURL + 'customers/login';
   /** Register User */
   public readonly REGISTER_AGENT: string = this.authURL + 'customers/agentregister';
   /** Login User*/
   public readonly LOGIN_AGENT: string = this.authURL + 'customers/agentlogin';
   /** Register User */
   public readonly REGISTER_STAFF: string = this.authURL + 'customers/staffregister';
   /** Login User*/
   public readonly LOGIN_STAFF: string = this.authURL + 'customers/stafflogin';
   // Get all flights
   public readonly GET_FLIGHTS: string = this.authURL + 'flights/flights';
   // Get all my flights
   public readonly GET_CFLIGHTS: string = this.authURL + 'tickets/flightctickets';
   // Get all my future flights
   public readonly GET_FCFLIGHTS: string = this.authURL + 'tickets/flightfctickets';
   // Get all my past flights
   public readonly GET_PCFLIGHTS: string = this.authURL + 'tickets/flightpctickets';
   // Get flights based on search
   public readonly GET_FLIGHTS_SEARCH: string = this.authURL + 'flights/search';
   // Get flights based on search
   public readonly GET_FLIGHTS_STATUS: string = this.authURL + 'flights/status';
   // Get flights based on airline
   public readonly GET_FLIGHTS_AIRLINE: string = this.authURL + 'flights/airlineflights';
   // Get passengers on flight
   public readonly GET_FLIGHTS_PASSENGERS: string = this.authURL + 'flights/passengers';
   // Update flight status
   public readonly UPDATE_STATUS: string = this.authURL + 'flights/update';
   // Create new flight
   public readonly CREATE_FLIGHT: string = this.authURL + 'flights/create';
   // Add payment
   public readonly ADD_PAYMENT: string = this.authURL + 'tickets/addpayment';
   // Add payment
   public readonly BUY_TICKET: string = this.authURL + 'tickets/buyticket';
   // Add airplane
   public readonly CREATE_AIRPLANE: string = this.authURL + 'flights/addairplane';
   // Add airport
   public readonly CREATE_AIRPORT: string = this.authURL + 'flights/addairport';
   // Add airplanes
   public readonly GET_AIRPLANES: string = this.authURL + 'flights/viewairplanes';
   // Add airplanes
   public readonly GET_FLIGHTS_AGENT: string = this.authURL + 'tickets/agent';
   
   /** Initialization of Endpoints */
   constructor(private http: HttpClient) { }

   /** Test method for printing out JSON at any given URL 
    * @param uri
   */
   public printJSON(uri: string): any {
      let obs = this.http.get<any>(uri);
      obs.subscribe(
         (response) => {
            console.log(response);
         },
         (response) => {
            console.log('failed');
         }
      )
   }
}