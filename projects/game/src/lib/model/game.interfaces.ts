export interface CollectionItemList {
  uid: string;
  name: string;
}

export interface CollectionItem {
  name: string;
  points: number;
  won?: boolean;
  score?: number;
}

export interface GameState {
  collection: CollectionItemList[];
  collectionItems: CollectionItem[];
  loading: boolean;
}
