import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  searchUser: string;
  constructor(
  ) { }

  ngOnInit() {
  }

  onSearchUser(event: string){
    this.searchUser = event;
  }
}
