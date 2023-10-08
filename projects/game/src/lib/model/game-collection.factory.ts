import { GameCollection } from './game-collection';

export abstract class GameCollectionFactory {
  abstract fromCollection(collection: any): GameCollection;
}
