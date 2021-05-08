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
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { AgenthomeComponent } from './components/agenthome/agenthome.component';
import { StaffhomeComponent } from './components/staffhome/staffhome.component';
import { BuybticketComponent } from './components/agenthome/buybticket/buybticket.component';
import { ViewflightsComponent } from './components/staffhome/viewflights/viewflights.component';
import { CreateplaneComponent } from './components/staffhome/createplane/createplane.component';
import { CreateairportComponent } from './components/staffhome/createairport/createairport.component';
import { AgentticketsComponent } from './components/agenthome/agenttickets/agenttickets.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    SpendingComponent,
    FooterComponent,
    RegisterComponent,
    AgenthomeComponent,
    StaffhomeComponent,
    BuybticketComponent,
    ViewflightsComponent,
    CreateplaneComponent,
    CreateairportComponent,
    AgentticketsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgSelectModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
