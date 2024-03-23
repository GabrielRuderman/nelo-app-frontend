import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaJugadoresComponent } from './alta-jugadores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const childRoutes: Routes = [
  {
    path: '',
    component: AltaJugadoresComponent
  }
]

@NgModule({
  declarations: [
    AltaJugadoresComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(childRoutes)
  ]
})
export class AltaJugadoresModule { }
