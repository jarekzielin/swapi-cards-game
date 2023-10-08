import { Injectable } from '@angular/core';
import { GameCollection } from 'projects/game/src/public-api';
import { CollectionType } from '../enums/collection-type.enum';
import { PeopleCollectionService } from './people-collection.service';
import { StarshipsCollectionService } from './starships-collection.service';
import { PlanetsCollectionService } from './planets-collection.service';

@Injectable({ providedIn: 'root' })
export class MyGameCollectionFactory {
  constructor(
    private peopleCollectionService: PeopleCollectionService,
    private starshipsCollectionService: StarshipsCollectionService,
    private planetsCollectionService: PlanetsCollectionService
  ) {}

  public fromCollection(collection: CollectionType): GameCollection {
    switch (collection) {
      case CollectionType.People:
        return this.peopleCollectionService;
      case CollectionType.Starships:
        return this.starshipsCollectionService;
      case CollectionType.Planets:
        return this.planetsCollectionService;
      default:
        throw new Error('Unknown collection');
    }
  }
}
