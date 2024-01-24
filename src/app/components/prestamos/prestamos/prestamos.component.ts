import { Component,EventEmitter,OnInit } from '@angular/core';
import { PrestamoServiceService } from '../../../services/prestamos/prestamo-service.service'

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  constructor( private servicePrestamo:PrestamoServiceService){}

    dataPrestamo = new EventEmitter<any>();

  prestamos :any

  ngOnInit(): void {
    this.servicePrestamo.getData()
    .then(res=>{
      this.prestamos = (res.results);
      console.log(this.prestamos)
    })
  }

  detailPrestamo($data:any){
    this.dataPrestamo.emit($data);
  }
}
