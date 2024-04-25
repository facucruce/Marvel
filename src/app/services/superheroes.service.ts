import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperheroesService {
  private apiKey = 'ffcf765ff78d04b0983cffb7dff379dd';
  private apiHash = 'e14d44eaa6446242bff915877c4bc83b';
  private apiUrl = 'https://gateway.marvel.com/v1/public/characters';

  constructor(private http: HttpClient) { }

  getSuperheros(): Observable<any> {
    const url = `${this.apiUrl}?limit=20&ts=1&apikey=${this.apiKey}&hash=${this.apiHash}`;
    return this.http.get(url);
  }
}
