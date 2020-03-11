import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { sharedComponents } from './shared';
import { RepoListViewModule } from './modules/repo-list-view/repo-list-view.module';
import { UserListModule } from './modules/user-list/user-list.module';
import { HttpClientModule } from '@angular/common/http';
import { UserInfoModule } from './modules/user-info/user-info.module';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ...sharedComponents,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    RepoListViewModule,
    RouterModule,
    UserListModule,
    UserInfoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
