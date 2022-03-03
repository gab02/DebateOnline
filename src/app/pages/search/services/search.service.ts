import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly PATH: string = '/candidato';

  constructor(private http: HttpClient) {}
  carregarRegistroSelect(name: string): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + '?name=' + name);
  }
}
