import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListItem, ResponseItem, ResponseList } from '../models/swapi.model';
import { Planet } from '../models/planets.model';

@Injectable({ providedIn: 'root' })
export class PlanetsApi {
  constructor(private httpClient: HttpClient) {}

  public getPlanets(): Observable<ListItem[]> {
    return this.httpClient
      .get<ResponseList>('https://www.swapi.tech/api/planets')
      .pipe(map((res) => res.results));
  }

  public getPlanet(uid: string): Observable<Planet> {
    return this.httpClient
      .get<ResponseItem<Planet>>(`https://www.swapi.tech/api/planets/${uid}`)
      .pipe(map((res) => res.result.properties));
  }
}
