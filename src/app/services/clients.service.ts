import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  async getClients():Promise<any>{
    return new Promise((resolve)=>{
      const url = 'localhost:3000/api/v1/clients';
      this.http.get(url).subscribe((response)=>{

        if(!response){
          alert("Ha ocurrido un error");
        }
        resolve(response)
      },async(error)=>{
        resolve(error.error)
      })
    }).catch(error=>{
      console.log(error)
    })
  }
}
