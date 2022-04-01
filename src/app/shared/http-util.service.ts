import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpUtilService {
  constructor() {}

  headers() {

    let headers = new HttpHeaders();
    
    if (localStorage['authToken']) {
      headers = headers.append(
        'Authorization',
        'Bearer ' + localStorage['authToken']
      );
      headers = headers.append(
        'Debate_provider',
        localStorage['provider']
      );
    }

    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }
}
