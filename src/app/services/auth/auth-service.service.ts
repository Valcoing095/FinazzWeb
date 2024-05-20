import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class authService{

    API_URL :string = `${environment.API_Finanzz_Back}/auth/login` //url base para el consumo de API 

    constructor( private httpClient: HttpClient){}

    logIn(dataLogin: any):Observable<any>{
        return this.httpClient.post(this.API_URL, dataLogin)
        .pipe(res=>res)
    }

}