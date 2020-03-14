import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private headers: Headers = new Headers();
    private requestOptions: HttpRequest<any>;
    private apiServer = 'https://api.github.com';

    constructor(
        private http: HttpClient

    ) {
        this.headers.set('Content-Type', 'application/json');

    }

    get(endPoint: string) {
        return this.http.get(this.createUrl(endPoint));
    }

    post(endPoint: string, body: any, options?: any) {
        return this.http.post(this.createUrl(endPoint), body);
    }

    options(endPoint: string, options?: any) {
        return this.http.post(this.createUrl(endPoint), this.getRequestOptions(options));
    }

    createUrl(endPoint: string) {
        let url = this.apiServer + endPoint;

        if (endPoint.startsWith(' ')) {
            url = this.apiServer + '/' + endPoint;
        }
        url = this.apiServer + endPoint;

        return url;
    }

    getRequestOptions(options?: any) {
        if (options) {
            options = new Object(this.requestOptions);
        }

        return this.requestOptions;
    }


}
