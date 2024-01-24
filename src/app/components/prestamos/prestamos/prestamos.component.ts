import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PrestamoServiceService } from '../../../prestamos/prestamo-service.service'

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  constructor( private servicePrestamo:PrestamoServiceService){}
  prestamos :any
  ngOnInit(): void {
    this.servicePrestamo.getData()
    .then(res=>{
      this.prestamos = (res.results);
      console.log(this.prestamos)
    })
  }

}
