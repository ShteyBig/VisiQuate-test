import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userInfoComponents } from '.';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [...userInfoComponents],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,

  ],
  exports: [...userInfoComponents]
})
export class UserInfoModule { }
