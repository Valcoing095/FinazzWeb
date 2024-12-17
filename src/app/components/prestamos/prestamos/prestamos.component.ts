import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/clientes/client-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit{
  listPrestamos = []


  constructor(private prestamosService: ClientService, private router:Router){}
  ngOnInit(): void {
    this.getPrestamos()
  }


  /**
   * @type {array}
   * Description: se trae toda la información de los prestamos asociados a un usuario.
  */
  getPrestamos(){
    // this.prestamosService.getClients().subscribe({
    //   next: (result) => {
    //     this.listPrestamos = result
    //     console.log(this.listPrestamos)
    //   },
    //   error: (err)=>{
    //     console.log(err)
    //   }
    // })
  }

  prestamoDetail(){
    this.router.navigate(['prestamos/detail'])
  }
}
