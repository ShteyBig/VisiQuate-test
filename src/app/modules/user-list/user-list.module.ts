import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userListComponents } from '.';

@NgModule({
  declarations: [...userListComponents],
  imports: [
    CommonModule
  ]
})
export class UserListModule { }
