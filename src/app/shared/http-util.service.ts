import { AppComponent } from 'src/app/app.component';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpUtilService {
  constructor() {}

  headers() {
    let httpHeaders: HttpHeaders = new HttpHeaders();

    if (localStorage['authToken']) {
      httpHeaders = httpHeaders.set(
        'Authorization',
        'Bearer ' + localStorage['authToken']
      );
      httpHeaders = httpHeaders.set(
        'Debate_provider',
        localStorage['provider']
      );
      // httpHeaders = httpHeaders.set (
      //   'id', localStorage.idToken
      // );
    }

    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return { headers: httpHeaders };
  }

  // obterIdUsuario(): string {
  //     if (!localStorage['id']){
  //       return '';
  //     }
  //     const dadosUsuario = localStorage['id']
  //   return localStorage['id'];
  // }

  // obterDadosUsuario() {
  //   if (!localStorage['token']){
  //     return '';
  //   }
  //   return JSON.parse(atob(localStorage['token'].split('.')[1]));
  // }
}
