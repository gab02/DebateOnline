import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpUtilService } from 'src/app/shared/http-util.service';
import { environment as env } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly PATH: string = '/candidato';

  constructor(private http: HttpClient, private httpUtil: HttpUtilService) {}
  carregarRegistroSelect(
    name: string,
    page: number,
    limit: number
  ): Observable<any> {
    return this.http.get(
      env.baseApiUrl +
        this.PATH +
        '?name=' +
        name +
        '&page=' +
        page +
        '&limit=' +
        limit,
      this.httpUtil.headers()
    );
  }
  carregarCandidato(name: String): Observable<any> {
    return this.http.get(env.baseApiUrl + this.PATH + '/' + name);
  }
  setLikeCandidato(name: String): Observable<any> {
    return this.http.put(
      env.baseApiUrl + this.PATH + '/' + name + '/like',
      this.httpUtil.headers()
    );
  }
  setUnLikeCandidato(name: String): Observable<any> {
    return this.http.put(
      env.baseApiUrl + this.PATH + '/' + name + '/unlike',
      {}
    );
  }

  saveComment(name: String, comentario: String): Observable<any> {
    return this.http.post(
      env.baseApiUrl + this.PATH + '/' + name + '/comment',
      { comentario: comentario }
    );
  }
}
