import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RepoListViewService {

	constructor(
	) {
	}

	repoDescription$ = new BehaviorSubject('')

	currentRepoData(data: any) {
		this.repoDescription$.next(data)
	}
}
