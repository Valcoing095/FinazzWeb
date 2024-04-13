import { Component,EventEmitter,OnInit } from '@angular/core';
import { PrestamoServiceService } from '../../../services/prestamos/prestamo-service.service'
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  constructor(
    private servicePrestamo:PrestamoServiceService,
    private serviceClient:ClientsService
  ){}

    dataPrestamo = new EventEmitter<any>();

  prestamos :any

  clients: any

  ngOnInit(): void {
    this.servicePrestamo.getData()
    .then(res=>{
      this.prestamos = (res.results);
      console.log(this.prestamos)
    });


    this.serviceClient.getClients()
    .then(res=>{
      this.clients =(res.results);
      console.log(this.clients)
    });
  }

  detailPrestamo($data:any){
    this.dataPrestamo.emit($data);
  }
}
