import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { GameCollection } from '../model/game-collection';
import { GameCollectionFactory } from '../model/game-collection.factory';
import { GameStateService } from './game-state.service';
import { CollectionItem } from '../model/game.interfaces';

@Injectable()
export class GameService {
  private gameCollection!: GameCollection;

  constructor(
    private gameCollectionFactory: GameCollectionFactory,
    private gameStateService: GameStateService
  ) {}

  public initGame(collection: string): void {
    this.gameCollection = this.gameCollectionFactory.fromCollection(collection);
    this.getCollection();
  }

  public playGame(): void {
    this.getCollectionItems([
      this.gameStateService.state.collection[this.randomIdx].uid,
      this.gameStateService.state.collection[this.randomIdx].uid,
    ]);
  }

  private getCollection(): void {
    this.gameStateService.updateState({
      ...this.gameStateService.state,
      collectionItems: [],
      loading: true,
    });
    this.gameCollection.getCollection().subscribe((collection) => {
      this.gameStateService.updateState({
        ...this.gameStateService.state,
        collection,
        loading: false,
      });
      this.playGame();
    });
  }

  private getCollectionItems(uids: string[]): void {
    this.gameStateService.updateState({
      ...this.gameStateService.state,
      loading: true,
    });
    forkJoin(
      uids.map((uid) => this.gameCollection.getCollectionItem(uid))
    ).subscribe((collectionItems) => {
      this.gameStateService.updateState({
        ...this.gameStateService.state,
        collectionItems: collectionItems.map((item, idx) => ({
          ...item,
          won: this.hasWon(collectionItems, item),
          score: this.getScore(
            this.hasWon(collectionItems, item),
            this.gameStateService.state.collectionItems?.[idx]?.score
          ),
        })),
        loading: false,
      });
    });
  }

  private get randomIdx() {
    return Math.floor(
      Math.random() * this.gameStateService.state.collection.length
    );
  }

  private hasWon(
    collectionItems: CollectionItem[],
    item: CollectionItem
  ): boolean {
    return collectionItems.every((i) => item.points >= i.points);
  }

  private getScore(won: boolean, score: number = 0): number {
    return won ? score + 1 : score;
  }
}
