import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://172.17.0.1:8000";

  constructor(private httpClient: HttpClient) { }


  public leggiGiornate(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/giornate/tutte.php');
  }

  public leggiGiornata(numero: number): Observable<any> {
    const options = { params: new HttpParams().set('numero', numero) };
    return this.httpClient.get<any[]>(this.baseUrl+'/giornate/singola.php', options);
  }

  public generaCampionato(): Observable<any> {
    return this.httpClient.post<any[]>(this.baseUrl+'/giornate/genera.php', {});
  }

  public giocaGiornata(numero: number): Observable<any> {
    return this.httpClient.put<any[]>(this.baseUrl+'/giornate/gioca.php', {numero: numero});
  }


  public leggiClassifica(): Observable<any> {
    return this.httpClient.get<any[]>(this.baseUrl+'/classifica/ultima.php');
  }


}
