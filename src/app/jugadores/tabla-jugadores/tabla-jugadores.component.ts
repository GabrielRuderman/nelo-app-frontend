import { Component, OnInit, inject } from '@angular/core';
import { JugadoresDataService } from '../services/jugadores-data.service';

@Component({
  selector: 'app-tabla-jugadores',
  templateUrl: './tabla-jugadores.component.html',
  styleUrls: ['./tabla-jugadores.component.scss']
})
export class TablaJugadoresComponent implements OnInit {
  jugadoresData = inject(JugadoresDataService);
  countries: any[] = [];
  currentPage: number = 1;

  ngOnInit(): void {
    this.jugadoresData.getAllCountries().subscribe(
      {
        next: (res) => { this.countries = res },
        error: (err) => this.showError(err)
      }
    )
  }

  showError(err: any): void {
    alert(err);
  }
}
