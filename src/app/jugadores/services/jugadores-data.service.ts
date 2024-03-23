import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresDataService {
  private http = inject(HttpClient);

  getAllCountries(): Observable<any> {
    return this.http.get('https://restcountries.com/v3.1/region/americas', {}).pipe()
  }


}
