import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { User } from 'src/app/shared/models/user';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {


    constructor(
        private api: ApiService
    ) {
    }

    openUserInfo(currentUser: string): Observable<User> {
        let endPoint = '/users' + '/' + currentUser

        return this.api
            .get(endPoint)
            .pipe(
                map(response => response as User)
            )
    }

    showRepos(currentUser: string): Observable<User> {
        let endPoint = '/users' + '/' + currentUser + '/repos'

        return this.api
            .get(endPoint)
            .pipe(
                map(response => response as User)
            )
    }
    
}
