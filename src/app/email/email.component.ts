import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { moveIn, fallIn } from '../router.animations';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  animations: [moveIn(), fallIn()],
  host: { '[@moveIn]': '' }
})
export class EmailComponent implements OnInit {
	state = '';
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

	onSubmit(formData) {
		if (formData.valid) {
			console.log(formData.value);
			this.af.auth.signInWithEmailAndPassword(formData.value.email, formData.value.password)
				.then(success => {
					console.log(success);
					this.router.navigate(['/members']);
				})
				.catch(
				(err) => {
					console.log(err);
					this.error = err;
				});
		}
	}
}
