import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(private http:HttpClient) { }

  API_URL :string = `${environment.API_Finanzz_Back}/prestamos` //url base para el consumo de API


  createPrestamo(data:object):Observable<any>{
    return this.http.post(`${this.API_URL}/create`,data)
  }


}



// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ClientService {
//   constructor( private httpClient:HttpClient) { }

//   getClients(): Observable<any>{
//     return this.httpClient.get(this.API_URL).pipe(res=>res)
//   }

//   createClients(data:any): Observable<any>{
//     return this.httpClient.post(`${this.API_URL}/create/client`,data).pipe(res=>res)
//   }

// }
