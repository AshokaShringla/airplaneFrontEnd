import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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
   public readonly REGISTER_USER: string = this.authURL + 'customers/api/user';
   /** Login User*/
   public readonly LOGIN_USER: string = this.authURL + 'customers/login';
   // Get all flights
   public readonly GET_FLIGHTS: string = this.authURL + 'flights/flights';
   // Get all my flights
   public readonly GET_CFLIGHTS: string = this.authURL + 'tickets/flightctickets';
   // Get all my future flights
      public readonly GET_FCFLIGHTS: string = this.authURL + 'tickets/flightfctickets';
   // Get all my past flights
   public readonly GET_PCFLIGHTS: string = this.authURL + 'tickets/flightpctickets';
   
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