import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {ErrorStateMatcher, ShowOnDirtyErrorStateMatcher} from "@angular/material/core";



@NgModule({
  declarations: [],
  imports: [
    CommonModule

  ],
  providers:[
    LoginComponent,
  ]
})
export class AuthModule { }
