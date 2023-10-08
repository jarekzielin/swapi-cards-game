# Star Wars - cards game

Simple Angular app based on [SWAPI](https://www.swapi.tech/).

As a player you can select random people or starships and render their details to see who would win based on a common attribute.
i.e. people have mass and starships have length. A person with greater mass wins, a starship with greater length wins.

The app renders the attributes from the resource (SWAPI) in a simple web page that allows a user to play the game.

Once two cards are displayed the app declares one of the cards a winner based on the higher common attribute.

Having displayed the winning card, a user is able to play again using an action button that repeats the same request.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
