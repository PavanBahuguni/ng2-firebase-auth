import { AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Node modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';

// App mcomponents
import { AppComponent } from './app.component';

import { FIREBASE_CONFIG } from './firebase.config';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuardService } from './auth-guard.service';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'login-email', component: EmailComponent },
	{ path: 'members', component: MembersComponent, canActivate: [AuthGuardService] }
];
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		EmailComponent,
		SignupComponent,
		MembersComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		AngularFireModule.initializeApp(FIREBASE_CONFIG)
	],
  providers: [AngularFireAuth, AuthGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
