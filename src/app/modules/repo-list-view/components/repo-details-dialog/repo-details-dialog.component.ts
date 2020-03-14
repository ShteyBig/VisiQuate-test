import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RepoListViewService } from '../../repo-list-view.service';

@Component({
    selector: 'app-repo-details-dialog',
    templateUrl: './repo-details-dialog.component.html',
    styleUrls: ['./repo-details-dialog.component.scss']
})
export class RepoDetailsDialogComponent implements OnInit {

    userInfoData: any;

    constructor(
        private repoListViewService: RepoListViewService,
    ) { }


    ngOnInit() {
        this.repoListViewService.repoDescription$.subscribe(data => {
            this.userInfoData = data;
        });
    }

}
