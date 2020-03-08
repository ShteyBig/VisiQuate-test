import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { userListComponents } from '.';
import { UserListService } from './user-list.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [...userListComponents],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [UserListService],
  exports: [...userListComponents]

})
export class UserListModule { }
