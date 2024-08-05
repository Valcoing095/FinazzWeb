import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientes/client-service.service';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-crear-prestamo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crear-prestamo.component.html',
  styleUrl: './crear-prestamo.component.css'
})
export class CrearPrestamoComponent implements OnInit{

  clientList = [];

  constructor(private clientService:ClientService){}

  ngOnInit(): void {
    this.getClients()
  }

  /** 
   * Form to create loan
   * @property {form} loanData - loanData.
  */
  formLoanData = new FormGroup({
    id_cliente : new FormControl(),
    valor_deuda: new FormControl(),
    cuotas: new FormControl(),
    fecha_inicio: new FormControl(),
  });

  /**
  * Carga todos los clientes creados a una list
  * @returns {clients} Todos los clientes creados 
  */
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


  /**
   * Crear prestamo a un cliente  
   *  @returns {boolean} status  true or false 
  */ 
  createLoan(){
  }

}
