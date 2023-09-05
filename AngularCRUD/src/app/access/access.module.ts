import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { RegisterComponent } from './register/register.component';
import { materialmodule } from 'src/material-module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    materialmodule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccessModule { }
