import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateaccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
