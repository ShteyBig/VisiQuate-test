import { Component, OnInit } from '@angular/core';
import { UserListItemComponent } from '../user-list-item/user-list-item.component';

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
    console.log("event from parent", event)
  }
}
