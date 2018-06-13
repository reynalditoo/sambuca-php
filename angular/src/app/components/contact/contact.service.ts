/*import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ContactService {

  user: object;

  constructor(private http: Http) { }

  sendingForm(user) {
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost/sambuca/mail.php', user, {headers: headers}) // doit correspondre au numéro de port du backend (app.js) ; for deployment : 'take out http://localhost:4000/'
  		.map(res => res.json());
  }

}*/

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 
export interface IMessage {
  name?: string,
  email?: string,
  subject?: string,
  message?: string
}
 
@Injectable()
export class ContactService {
 
  constructor(private http: Http) {}
 
  sendMail(form: IMessage): Observable<IMessage> | any {
    let headers = new Headers();
  	headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post('http://sambuca.breyn.net/mail.php', form, {headers: headers}) // en local : http://localhost/sambuca/mail.php | en ligne : http://sambuca.breyn.net/mail.php
      .map(response => {
        console.log('Sending was successfull', response);
        return response;
      })
      .catch(error => {
        console.log('Sending got some error', error);
        return Observable.throw(error);
      })
  }
}