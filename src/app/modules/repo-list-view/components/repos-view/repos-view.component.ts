import { Component, OnInit } from '@angular/core';
import { RepoListViewService } from '../../repo-list-view.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RepoDetailsDialogComponent } from '../repo-details-dialog/repo-details-dialog.component';
import { UserInfoService } from 'src/app/modules/user-info/user-info.service';

@Component({
    selector: 'app-repos-view',
    templateUrl: './repos-view.component.html',
    styleUrls: ['./repos-view.component.scss']
})
export class ReposViewComponent implements OnInit {

    currentUsersUrl: string;
    userInfoData: any;
    userRepos: any;
    repoNames: any;
    focusState = false;
    itemDescription: MatDialogRef<RepoDetailsDialogComponent>;

    constructor(
        private repoListViewService: RepoListViewService,
        private userInfoService: UserInfoService,
        private router: Router,
        private dialog: MatDialog
    ) {
    }

    ngOnInit() {
        this.currentUsersUrl = this.router.url.split('/').pop();
        this.userInfoService.openUserInfo(this.currentUsersUrl).subscribe(
            data => {
                this.userInfoData = data;
            }
        );
        this.loadRepos();
    }

    loadRepos() {
        this.userInfoService.showRepos(this.currentUsersUrl)
            .subscribe(
                data => {
                    this.userRepos = data;
                },
            );
    }


    openDescription(repoName: any) {
        this.repoListViewService.currentRepoData(repoName);
        this.itemDescription = this.dialog.open(RepoDetailsDialogComponent);
    }
}
