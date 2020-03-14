import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { UserListService } from '../../user-list.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list-item',
    templateUrl: './user-list-item.component.html',
    styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent implements OnInit, OnChanges {

    public userFound: any;
    public currentUser: any;

    @Input() filteredUser: string;

    constructor(
        private userListService: UserListService,
        private router: Router
        ) { }

    ngOnInit() {
    }

    ngOnChanges() {
        this.filterUsers(this.filteredUser);
    }

    filterUsers(userToFilter?: string) {
        this.userListService.getUsers().subscribe(
            usersData => {
                if (userToFilter) {
                    this.userFound = usersData.filter(data => data.login.toLowerCase()
                        .startsWith(userToFilter.toLowerCase()));
                } else {
                    this.userFound = usersData;
                }
            },
        );
    }

    showUserInfo(userId: any) {
        this.userListService.openUserInfo(userId.login).subscribe(
            data => {
                this.router.navigate(['/userInfo', data.login]);
            }
        );
    }
}
