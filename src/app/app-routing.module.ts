import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'my-game',
    loadChildren: () =>
      import('./my-game/my-game.module').then((m) => m.MyGameModule),
  },
  {
    path: '',
    redirectTo: '/my-game',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
