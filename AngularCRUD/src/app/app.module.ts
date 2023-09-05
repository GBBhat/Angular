import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { RegisterComponent } from './access/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import {MatTableModule} from '@angular/material/table';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { materialmodule } from 'src/material-module';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
//import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StatusComponent,
    ContactComponent,
    AddcontactComponent,
    UserComponent,
    ModalpopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    materialmodule,
    ReactiveFormsModule // include for reactive forms
    //MatButtonModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
