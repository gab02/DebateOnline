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
    }

    httpHeaders = httpHeaders.set('Content-Type', 'application/json');
    return { headers: httpHeaders };
  }
}
