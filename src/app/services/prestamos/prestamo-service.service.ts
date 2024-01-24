import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestamoServiceService {

  constructor(private http:HttpClient) { }


  async getData(): Promise<any> {
    return new Promise((resolve)=>{
      const url = 'https://rickandmortyapi.com/api/character/?page=19';
      this.http.get(url).subscribe((response)=>{

        if(!response){
          alert("Ha ocurrido un error")
        }

        resolve(response)
      },async(error)=>{
        resolve(error.error)
      })
    }).catch(error => {
      // Imprimo el error
      console.error(error);
    });
  }
}
