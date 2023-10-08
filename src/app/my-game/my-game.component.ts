import { Component } from '@angular/core';
import { CollectionType } from './enums/collection-type.enum';

@Component({
  selector: 'app-game',
  templateUrl: './my-game.component.html',
  styleUrls: ['./my-game.component.scss'],
})
export class MyGameComponent {
  public collections = [
    CollectionType.People,
    CollectionType.Starships,
    CollectionType.Planets,
  ];
}
