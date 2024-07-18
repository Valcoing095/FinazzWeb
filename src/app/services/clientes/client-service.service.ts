import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  API_URL :string = `${environment.API_Finanzz_Back}/clients` //url base para el consumo de API 
  constructor( private httpClient:HttpClient) { }

  getClients(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res)
  }

  createClients(data:any): Observable<any>{
    return this.httpClient.post(`${this.API_URL}/create/client`,data).pipe(res=>res)
  }

}
