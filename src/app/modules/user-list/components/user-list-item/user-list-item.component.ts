import { Component, OnInit, Input } from '@angular/core';
import { UserListService } from '../../user-list.service'


@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

    public userFound: any;

    @Input() filteredUser: string;

    constructor(private _userListService: UserListService) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.filterUsers(this.filteredUser)
    }

    filterUsers(userToFilter?: string) {
        this._userListService.getUsers().subscribe(
            usersData => {
                if (userToFilter) {
                    this.userFound = usersData.filter(data => data.login.match(userToFilter))
                } else {
                    this.userFound = usersData
                }
                console.log("this.userFound", this.userFound)
            },
            err => console.error(err),
        );
    }
}
