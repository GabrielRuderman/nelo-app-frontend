import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerFormComponent} from "./components/player-form/player-form.component";
import {RouterModule} from "@angular/router";
import { PlayerTableComponent } from './components/player-table/player-table.component';

@NgModule({
  declarations: [
    PlayerTableComponent
  ],
  imports: [
    CommonModule,
    PlayerFormComponent,
    RouterModule.forChild([
      {
        path: '',
        component: PlayerTableComponent
      },
      {
        path: 'alta',
        component: PlayerFormComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: "full"
      }
    ])
  ]
})
export class PlayerModule { }
