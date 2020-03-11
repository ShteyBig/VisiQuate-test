import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../user-info.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
})

export class UserInfoComponent implements OnInit {

    currentUsersUrl: string;
    userInfoData: any;

    constructor(
        private _userInfoService: UserInfoService, private router: Router
    ) {
    }

    ngOnInit() {
        this.currentUsersUrl = this.router.url.split("/").pop();
        this._userInfoService.openUserInfo(this.currentUsersUrl).subscribe(
            data => {
                this.userInfoData = data;
            }
        )
    }

    showUserRepos() {
        this._userInfoService.showRepos(this.userInfoData.login).subscribe(
            data => {
                this.router.navigate(['/repoListView', this.userInfoData.login])
            }
        )
    }


}
