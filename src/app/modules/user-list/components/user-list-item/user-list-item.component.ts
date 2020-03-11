import { Component, OnInit, Input } from '@angular/core';
import { UserListService } from '../../user-list.service'
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit {

    public userFound: any;
    public currentUser: any;

    @Input() filteredUser: string;

    constructor(
        private _userListService: UserListService,
        private router: Router
        ) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.filterUsers(this.filteredUser)
    }

    filterUsers(userToFilter?: string) {
        this._userListService.getUsers().subscribe(
            usersData => {
                if (userToFilter) {
                    this.userFound = usersData.filter(data => data.login.startsWith(userToFilter))
                } else {
                    this.userFound = usersData
                }
            },
        );
    }

    showUserInfo(userId: any) {
        this._userListService.openUserInfo(userId.login).subscribe(
            data => {
                this.router.navigate(['/userInfo', data.login])
            }
        )
    }
}
