import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://172.17.0.2:8000";

  constructor(private httpClient: HttpClient) { }

  /**
   * tutte le partite
   */
  public leggiCalendario(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?calendario=');
  }

  /**
   * tutte le partite per giornata
   */
  public leggiGiornate(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?calendario=giorni');
  }

  /**
   * tutte le partite per una suadra
   */
  public leggiSquadra(numero: number): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?calendario=squadra');
  }


  public leggiClassifica(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?classifica');
  }


  public giocaGiornata(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?giocaGiornata=random');
  }


  public giocaCampionato(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/index.php?giocaCampionato=random');
  }

}
