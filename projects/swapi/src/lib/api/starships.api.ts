import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListItem, ResponseItem, ResponseList } from '../models/swapi.model';
import { Starship } from '../models/starships.model';

@Injectable({ providedIn: 'root' })
export class StarshipsApi {
  constructor(private httpClient: HttpClient) {}

  public getStarships(): Observable<ListItem[]> {
    return this.httpClient
      .get<ResponseList>('https://www.swapi.tech/api/starships')
      .pipe(map((res) => res.results));
  }

  public getStarship(uid: string): Observable<Starship> {
    return this.httpClient
      .get<ResponseItem<Starship>>(
        `https://www.swapi.tech/api/starships/${uid}`
      )
      .pipe(map((res) => res.result.properties));
  }
}
