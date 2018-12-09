import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [SignUpComponent, LoginComponent]
})
export class AuthModule { }
