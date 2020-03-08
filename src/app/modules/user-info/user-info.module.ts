import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userInfoComponents } from '.';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...userInfoComponents],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...userInfoComponents]
})
export class UserInfoModule { }
