import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { FlightsComponent } from './components/flights/flights.component';
import { MyflightsComponent } from './components/customerhome/myflights/myflights.component';
import { BuycflightComponent } from './components/customerhome/buycflight/buycflight.component';
import { PreviousflightsComponent } from './components/customerhome/previousflights/previousflights.component';
import { SpendingComponent } from './components/customerhome/spending/spending.component';

@NgModule({
  declarations: [ 
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CustomerhomeComponent,
    FlightsComponent,
    MyflightsComponent,
    BuycflightComponent,
    PreviousflightsComponent,
    SpendingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
