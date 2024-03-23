import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaJugadoresModule } from './jugadores/alta-jugadores/alta-jugadores.module';

const routes: Routes = [
  {
    path: 'alta-jugadores',
    loadChildren: () => import('./jugadores/alta-jugadores/alta-jugadores.module').then(m => m.AltaJugadoresModule)
  },
  {
    path: 'jugadores',
    loadChildren: () => import('./jugadores/tabla-jugadores/tabla-jugadores.module').then(m => m.TablaJugadoresModule)
  },
  {
    path: '**',
    redirectTo: 'jugadores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
