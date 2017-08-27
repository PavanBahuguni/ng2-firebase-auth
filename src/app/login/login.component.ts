import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { moveIn } from '../router.animations';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [moveIn()],
  host: { '[@moveIn]': '' }
})
export class LoginComponent implements OnInit {
	error: any;
	constructor(private af: AngularFireAuth, private router: Router) {
		this.af.authState.subscribe(auth => {
			if (auth) {
				this.router.navigateByUrl('/members');
			}
		});
	}

	ngOnInit() {
	}

	loginWithFb() {
		this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
			.then((success) => {
				this.router.navigateByUrl('/members');
			})
			.catch((error) => {
				this.error = error;
			});
	}

	loginWithGoogle() {
		this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
		.then((success) => {
			this.router.navigateByUrl('/members');
		})
		.catch((error) => {
			this.error = error;
		});
	}
}
