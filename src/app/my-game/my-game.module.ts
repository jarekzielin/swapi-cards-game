import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import {
  GameCollectionFactory,
  GameModule,
} from 'projects/game/src/public-api';
import { MyGameCollectionFactory } from './services/my-game-collection.factory';
import { MyGameComponent } from './my-game.component';

@NgModule({
  declarations: [MyGameComponent],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MyGameComponent,
      },
    ]),
    GameModule.forRoot({
      collectionFactoryProvider: {
        provide: GameCollectionFactory,
        useClass: MyGameCollectionFactory,
      },
    }),
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
  ],
})
export class MyGameModule {}
