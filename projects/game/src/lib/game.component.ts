import { Component } from '@angular/core';
import { GameService } from './services/game.service';
import { GameStateService } from './services/game-state.service';

@Component({
  selector: 'lib-game',
  template: `
    <ng-container *ngIf="gameStateService.state$ | async as state">
      <div class="game-cards">
        <mat-spinner *ngIf="state.loading; else cardsEl"></mat-spinner>
        <ng-template #cardsEl>
          <mat-card *ngFor="let item of state.collectionItems">
            <mat-card-header>
              <mat-card-title>{{ item.points }}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <span class="game-points">{{ item.name }}</span>
            </mat-card-content>
            <mat-card-actions>
              <span *ngIf="item.won" class="game-winner-label">winner!!!</span>
            </mat-card-actions>
          </mat-card>
        </ng-template>
      </div>
      <div class="game-result">
        <ng-container
          *ngFor="let item of state.collectionItems; let last = last"
        >
          <div class="gane-card-score">{{ item.score }}</div>
          <div *ngIf="!last">-</div>
        </ng-container>
      </div>
      <div class="game-actions" *ngIf="state.collectionItems?.length">
        <button
          mat-raised-button
          color="primary"
          [disabled]="state.loading"
          (click)="gameService.playGame()"
        >
          Play again
        </button>
      </div>
    </ng-container>
  `,
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(
    public gameService: GameService,
    public gameStateService: GameStateService
  ) {}

  public init(collection: string): void {
    this.gameService.initGame(collection);
  }
}
