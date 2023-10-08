import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CollectionItem,
  CollectionItemList,
  GameCollection,
} from 'projects/game/src/public-api';
import { PlanetsApi } from 'projects/swapi/src/public-api';

@Injectable({ providedIn: 'root' })
export class PlanetsCollectionService implements GameCollection {
  constructor(private planetsApi: PlanetsApi) {}

  public getCollection(): Observable<CollectionItemList[]> {
    return this.planetsApi.getPlanets();
  }

  public getCollectionItem(uid: string): Observable<CollectionItem> {
    return this.planetsApi.getPlanet(uid).pipe(
      map((planet) => ({
        name: planet.name,
        points: +planet.diameter,
      }))
    );
  }
}
