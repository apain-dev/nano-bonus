import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';


@Injectable()
export class RequestService {
  _baseUrl;
  _config;

  constructor(private http: HttpClient) {
    this._baseUrl = 'http://api.battoire.fr/';
    this._config = {
      headers: {'Content-type': 'application/json'},
      'dataType': 'json'
    };
  }

  getFiles() {
    return this.http.post(this._baseUrl + 'nano/getFiles', {}, this._config).toPromise().then(
      function (response) {
        return response;
      },
      function (response) { // Error callback
        return response;
      }
    );
  }

  getReadFile(filename: string) {
    return this.http.post(this._baseUrl + 'nano/readFile', {file: filename}, this._config).toPromise().then(
      function (response) {
        return response;
      },
      function (response) { // Error callback
        return response;
      }
    );
  }
  run(filename, params) {
    return this.http.post(this._baseUrl + 'nano/run', {file: filename, params: params}, this._config).toPromise().then(
      function (response) {
        return response;
      },
      function (response) { // Error callback
        return response;
      }
    );
  }

}
