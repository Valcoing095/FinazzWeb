import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanServiceService {
  /** 
   * variable de entorno configurada para usar la api dependiendo del service
  */
  API_URL :string = `${environment.API_Finanzz_Back}/prestamos`
  constructor() { }
}
