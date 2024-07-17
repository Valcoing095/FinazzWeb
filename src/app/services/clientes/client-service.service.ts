import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  API_URL : string = 'http://localhost:4000/api/v1/clients'
  constructor( private httpClient:HttpClient) { }

  getClients(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res=>res)
  }

  createClients(data:any): Observable<any>{
    return this.httpClient.post(`${this.API_URL}/create/client`,data).pipe(res=>res)
  }

}
