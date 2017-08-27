import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
	selector: 'app-members',
	templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: { '[@moveIn]': '' }
})
export class MembersComponent implements OnInit {
	name: any;
	state = '';
	constructor(private af: AngularFireAuth,private router: Router) { 
		this.af.authState.subscribe(auth => {
			if (auth) {
        this.name = auth;
        console.log(auth.displayName);
			}
		});
	}

	ngOnInit() {
	}

	logOut() {
		this.af.auth.signOut();
		console.log('logged out');
		this.router.navigateByUrl('/login');
	}
}
