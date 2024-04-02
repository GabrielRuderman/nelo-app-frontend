import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerFormComponent} from "./components/player-form/player-form.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PlayerFormComponent,
    RouterModule.forChild([
      {
        path: 'alta',
        component: PlayerFormComponent
      }
    ])
  ]
})
export class PlayerModule { }
