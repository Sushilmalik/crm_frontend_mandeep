// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';


// import { Observable } from 'rxjs';
// import { environment } from '../../environment/environments';


// @Injectable({
//   providedIn: 'root',
// })
// export class GoogleAuthService {
//   private googleAuth: any;
//   private idToken: string | null = null;
//   private readonly clientId = environment.googleClientId;
//   private readonly apiUrl = environment.apiBaseUrl;

//   constructor(private http: HttpClient) {
  
//   }

//   private loadGoogleAPI(): void {
//     debugger;
//     gapi.load('auth2', () => {
//       this.googleAuth = gapi.auth2.init({
//         client_id: this.clientId,
//         cookiepolicy: 'single_host_origin',
//       });
//     });
//   }


//   login(): Observable<any> {
//     return new Observable((observer) => {
//       this.googleAuth
//         .signIn()
//         .then((googleUser: any) => {
//           const idToken = googleUser.getAuthResponse().id_token;
//           this.idToken = idToken;
//           observer.next(idToken);
//           observer.complete();
//         })
//         .catch((error:any) => {
//           observer.error(error);
//         });
//     });
//   }


//   validateGoogleToken(idToken: string): Observable<any> {
//     const url = `${this.apiUrl}api/auth/google-signup-login`;
//     return this.http.post(url, { idToken });
//   }


//   signUpWithEmail(name: string, email: string, mobile: string): Observable<any> {
//     const url = `${this.apiUrl}api/auth/signup`;
//     return this.http.post(url, { name, email, mobile });
//   }
// }
