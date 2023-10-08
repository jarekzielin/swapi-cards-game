import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CollectionItem,
  CollectionItemList,
  GameCollection,
} from 'projects/game/src/public-api';
import { StarshipsApi } from 'projects/swapi/src/public-api';

@Injectable({ providedIn: 'root' })
export class StarshipsCollectionService implements GameCollection {
  constructor(private starshipsApi: StarshipsApi) {}

  public getCollection(): Observable<CollectionItemList[]> {
    return this.starshipsApi.getStarships();
  }

  public getCollectionItem(uid: string): Observable<CollectionItem> {
    return this.starshipsApi
      .getStarship(uid)
      .pipe(
        map((starship) => ({
          name: starship.name,
          points: +starship.length,
        }))
      );
  }
}
