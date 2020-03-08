import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './modules/user-list/components/user-list/user-list.component';
import { UserInfoComponent } from './modules/user-info/components/user-info/user-info.component';


const routes: Routes = [
  {path: '', redirectTo: '/userList', pathMatch: 'full'},
  {path: 'userList', component: UserListComponent},
  {path: 'userInfo', component: UserInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
