import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

    getUsers(): Observable<User[]> {

        let endPoint = '/users';

        return this.api
            .get(endPoint)
            .pipe(
                map(res => res as User[])
            );
    }

}
