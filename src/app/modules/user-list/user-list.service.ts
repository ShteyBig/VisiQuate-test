import { Injectable } from '@angular/core';
import { Observable, Subject, ObservableLike } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { ApiService } from 'src/app/shared/services/api.service';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    constructor(
        private api: ApiService
    ) {
    }

    getUsers(userName?: any): Observable<User> {
        let endPoint = '/users';

        if (userName) {
            endPoint = '/search/users?q=' + userName;
        }
        return this.api
            .get(endPoint)
            .pipe(
                map(res => res as User)
            );
    }

    openUserInfo(currentUser: string): Observable<User> {
        const endPoint = '/users' + '/' + currentUser;

        return this.api
            .get(endPoint)
            .pipe(
                map(response => response as User)
            );
    }

}
