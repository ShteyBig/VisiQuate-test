import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './modules/user-list/components/user-list/user-list.component';
import { UserInfoComponent } from './modules/user-info/components/user-info/user-info.component';
import { ReposViewComponent } from './modules/repo-list-view';


const routes: Routes = [
  {path: '', redirectTo: '/userList', pathMatch: 'full'},
  {path: 'userList', component: UserListComponent},
  {path: 'userInfo/:id', component: UserInfoComponent},
  {path: 'repoListView/:id', component: ReposViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
