import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  constructor( private http:HttpClient){}
  prestamos :any
  ngOnInit(): void {
    this.getData().then(res=>{
      this.prestamos = (res.results);
      console.log(this.prestamos)
    })
  }

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
