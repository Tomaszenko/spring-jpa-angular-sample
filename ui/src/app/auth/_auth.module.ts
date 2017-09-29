import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {RouterModule} from "@angular/router";
import {NotFoundComponent} from "../not-found.component";
import {authRoutes} from "./auth.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes)
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent]
})
export class AuthModule { }
