import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';

import { AuthGuard } from './auth.guard';

const routes : Routes = [
  {path:'', redirectTo:'/signin', pathMatch:'full'},
  {path:'countries', component:CountryComponent, canActivate:[AuthGuard]},
  {path:'signup', component:SignupComponent},
  {path:'signin', component:SigninComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
