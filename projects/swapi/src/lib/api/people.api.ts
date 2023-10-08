import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListItem, ResponseItem, ResponseList } from '../models/swapi.model';
import { Person } from '../models/people.model';

@Injectable({ providedIn: 'root' })
export class PeopleApi {
  constructor(private httpClient: HttpClient) {}

  public getPeople(): Observable<ListItem[]> {
    return this.httpClient
      .get<ResponseList>('https://www.swapi.tech/api/people')
      .pipe(map((res) => res.results));
  }

  public getPerson(uid: string): Observable<Person> {
    return this.httpClient
      .get<ResponseItem<Person>>(`https://www.swapi.tech/api/people/${uid}`)
      .pipe(map((res) => res.result.properties));
  }
}
