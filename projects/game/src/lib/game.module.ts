import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { GameComponent } from './game.component';
import { GameService } from './services/game.service';
import { GameStateService } from './services/game-state.service';

@NgModule({
  declarations: [GameComponent],
  exports: [GameComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  providers: [GameService, GameStateService],
})
export class GameModule {
  static forRoot(options: {
    collectionFactoryProvider: Provider;
  }): ModuleWithProviders<GameModule> {
    return {
      ngModule: GameModule,
      providers: [options.collectionFactoryProvider],
    };
  }
}
