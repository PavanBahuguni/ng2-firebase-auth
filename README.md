# Ng2FirebaseAuth

Live demo at [Angular Firebase authentication](https://ng2-auth-b797a.firebaseapp.com/login)

## Configure firebase
 Create a firebase project and add the configuration in to the file /src/app/firebase.config.ts as follows
 `export const FIREBASE_CONFIG = {
	  apiKey: <api_key>,
	  authDomain: <auth_domain>,
	  databaseURL: <database_url>,
	  projectId: <project_id>,
	  storageBucket: '',
	  messagingSenderId: <messaging_sender_id>
  };`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.
