import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CollectionItem,
  CollectionItemList,
  GameCollection,
} from 'projects/game/src/public-api';
import { PeopleApi } from 'projects/swapi/src/public-api';

@Injectable({ providedIn: 'root' })
export class PeopleCollectionService implements GameCollection {
  constructor(private peopleApi: PeopleApi) {}

  public getCollection(): Observable<CollectionItemList[]> {
    return this.peopleApi.getPeople();
  }

  public getCollectionItem(uid: string): Observable<CollectionItem> {
    return this.peopleApi
      .getPerson(uid)
      .pipe(map((person) => ({ name: person.name, points: +person.mass })));
  }
}
