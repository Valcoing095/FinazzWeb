import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientes/client-service.service';

@Component({
  selector: 'app-crear-prestamo',
  standalone: true,
  imports: [],
  templateUrl: './crear-prestamo.component.html',
  styleUrl: './crear-prestamo.component.css'
})
export class CrearPrestamoComponent implements OnInit{

  clientList = [];

  constructor(private clientService:ClientService){}

  ngOnInit(): void {
    this.getClients()
  }
  // Se crea formulario con los clientes ya ceados a los que se les va a realizar el prestamo
  getClients(){
    this.clientService.getClients().subscribe({
      next:(result)=>{
        this.clientList = result
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  createPrestamos(){

  }

}
