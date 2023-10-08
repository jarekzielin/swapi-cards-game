import { Observable } from 'rxjs';
import { CollectionItemList, CollectionItem } from './game.interfaces';

export abstract class GameCollection {
  abstract getCollection(): Observable<CollectionItemList[]>;
  abstract getCollectionItem(uid: string): Observable<CollectionItem>;
}
