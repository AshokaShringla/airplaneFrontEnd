import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AgenthomeComponent } from './components/agenthome/agenthome.component';
import { AgentticketsComponent } from './components/agenthome/agenttickets/agenttickets.component';
import { BuybticketComponent } from './components/agenthome/buybticket/buybticket.component';
import { BuycflightComponent } from './components/customerhome/buycflight/buycflight.component';
import { CustomerhomeComponent } from './components/customerhome/customerhome.component';
import { MyflightsComponent } from './components/customerhome/myflights/myflights.component';
import { FlightsComponent } from './components/flights/flights.component';
// import { ContentCreatorPageComponent } from './components/content-creator-page/content-creator-page.component';
// import { ContentFinderPageComponent } from './components/content-finder-page/content-finder-page.component';
// import { ModuleCreatorPageComponent } from './components/module-creator-page/module-creator-page.component';
// import { ModuleIndexPageComponent } from './components/module-index-page/module-index-page.component';
// import { ReportsPageComponent } from './components/reports-page/reports-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreateairportComponent } from './components/staffhome/createairport/createairport.component';
import { CreateplaneComponent } from './components/staffhome/createplane/createplane.component';
import { StaffhomeComponent } from './components/staffhome/staffhome.component';
import { ViewflightsComponent } from './components/staffhome/viewflights/viewflights.component';
// import { RegisterComponent } from './components/register/register.component';
// import { ContentApprovalComponent } from './components/content-approval/content-approval.component';
// import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

/** @ignore */
const routes: Routes = [
   // { path: '', redirectTo: '/content-creator', pathMatch: 'full' },
   { path: '', redirectTo: '/finder', pathMatch: 'full' },
  //  { path: 'content-creator', component: ContentCreatorPageComponent, pathMatch: 'full' },
  //  { path: 'finder', component: ContentFinderPageComponent, pathMatch: 'full' },
  //  { path: 'module-creator', component: ModuleCreatorPageComponent, pathMatch: 'full' },
  //  { path: 'module-index', component: ModuleIndexPageComponent, pathMatch: 'full' },
  //  { path: 'reports', component: ReportsPageComponent},
   { path: 'login', component: LoginComponent, pathMatch: 'full'},
   {path: 'customerhome', component: CustomerhomeComponent, pathMatch: 'full'},
   {path: 'customerflights', component: MyflightsComponent, pathMatch: 'full'}, 
   {path: 'flights', component: FlightsComponent, pathMatch: 'full'},
   {path: 'buyflight', component: BuycflightComponent, pathMatch: 'full'},
   {path: 'buybflight', component: BuybticketComponent, pathMatch: 'full'},
   {path: 'register', component: RegisterComponent, pathMatch: 'full'},
   {path: 'agenthome', component: AgenthomeComponent, pathMatch: 'full'},
   {path: 'staffhome', component: StaffhomeComponent, pathMatch: 'full'},
   {path: 'viewflights', component: ViewflightsComponent, pathMatch: 'full'},
   {path: 'addplane', component: CreateplaneComponent, pathMatch: 'full'},
   {path: 'addport', component: CreateairportComponent, pathMatch: 'full'},
   {path: 'agenttickets', component: AgentticketsComponent, pathMatch: 'full'}
  //  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  //  { path: 'approval', component: ContentApprovalComponent, pathMatch: 'full'},
  //  { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full'},
  //  { path: '**', redirectTo: '/content-creator', pathMatch: 'full' }
];

/** @ignore */
const extraOptions: ExtraOptions = {
   enableTracing: false,
   scrollPositionRestoration: 'enabled'
};

/** @ignore */
@NgModule({
   imports: [RouterModule.forRoot(routes, extraOptions)],
   exports: [RouterModule]
})
export class AppRoutingModule { }