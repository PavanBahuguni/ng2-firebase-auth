import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

	constructor(private af: AngularFireAuth, private router: Router) { }
	canActivate(): Observable<boolean> {
		return this.af.authState
			.take(1)
			.map(state => !!state)
			.do((authenticated) => {
				if (!authenticated) {
					this.router.navigate(['/login']);
				}
			});
	}
}
