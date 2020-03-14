import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {


  private searchByName = new FormControl('');

  constructor() { }

  @Output() userToFind: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  filterUser() {
    this.userToFind.emit(this.searchByName.value);
  }

}
