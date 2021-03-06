import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { TOKEN } from '../../env';

export class ServiceRequest {
  serverUrl: string;
  baseUrl: string;
  queryParams: URLSearchParams;
  headers: HttpHeaders;

  toString(): string {
    return this.serverUrl + (this.baseUrl || '') + '?' + this.queryParams.toString();
  }

  constructor() {
    const _token = TOKEN;

    this.queryParams = new URLSearchParams();
    this.headers = new HttpHeaders().set('Authorization', _token);
    this.serverUrl = 'https://api.github.com';
  }
}

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private _http: HttpClient) {
  }

  getCountOfGistsCreatedAfter(since: string): Promise<number> {
    const request: ServiceRequest = new ServiceRequest();
    request.queryParams.append('since', since);
    request.baseUrl = '/gists/public';
    return this.httpGet(request, resp => ([...resp]).length);
  }

  getCountOfFilesCreatedAfter(since: string): Promise<number> {
    const request: ServiceRequest = new ServiceRequest();
    request.queryParams.append('since', since);
    request.baseUrl = '/gists/public';
    return this.httpGet(request, (resp) => {
      const gists = ([...resp]);
      const files = (gists
        .map(gist => gist.files ? Object.keys(gist.files).length : []));

      return files.length ? (files.reduce((sum: number, f: number) => sum + f) as number) : 0;
    });
  }

  private httpGet<T>(request: ServiceRequest, mapFn: (o: any) => T): Promise<T> {
    return this._http.get(request.toString(), {
      headers: request.headers
    }).pipe(map(mapFn)).toPromise();
  }
}
