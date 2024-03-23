import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaJugadoresComponent } from './tabla-jugadores.component';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    TablaJugadoresComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    RouterModule.forChild([{path: '', component: TablaJugadoresComponent}])
  ]
})
export class TablaJugadoresModule { }
