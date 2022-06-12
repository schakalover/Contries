import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Countrie } from '../model';

@Injectable()
export class CountriesService {
  private _baseUrl: string;

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  public getAll(): Observable<Countrie[]> {
    return this.http.get<Countrie[]>(this._baseUrl + 'all');
  }

  public getCountrieForName(name: string): Observable<Countrie[]> {
    return this.http.get<Countrie[]>(this._baseUrl + 'name/' + name);
  }
}
