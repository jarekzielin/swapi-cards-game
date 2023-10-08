import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GameState } from '../model/game.interfaces';

const initialGameState: GameState = {
  collection: [],
  collectionItems: [],
  loading: false,
};

@Injectable()
export class GameStateService {
  private readonly _state$ = new BehaviorSubject<GameState>(initialGameState);

  get state$(): Observable<GameState> {
    return this._state$.asObservable();
  }

  public updateState(state: GameState) {
    this._state$.next(state);
  }

  public get state(): GameState {
    return this._state$.value;
  }
}
