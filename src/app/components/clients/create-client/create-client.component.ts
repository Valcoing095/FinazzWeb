
import { Component } from '@angular/core';
// imports de services
import { ClientService } from '../../../services/clientes/client-service.service'
// imports para control de formularios
import { FormControl,FormGroup,ReactiveFormsModule,Validators,FormBuilder } from '@angular/forms';
// imports para control de errores
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  constructor(private clientService: ClientService, private router:Router){}
  // Formulario para crearCliente

  formCreateClient = new FormGroup({
    nombre_completo: new FormControl(),
    email : new FormControl(),
    celular  : new FormControl(),
    direccion  : new FormControl()
  })

  // validar formulario
  create(){
    console.log(this.formCreateClient.value)

    if(this.formCreateClient){
      // consumir service para creación de clientes
      this.clientService.createClients(this.formCreateClient.value)
      .subscribe(
        (res) => {
          Swal.fire({
            icon: "success",
            title: `Bienvenido`,
          });
          this.router.navigate(['home']);
        },err=>{
          Swal.fire({
            icon: "error",
            title: "Porfavor verifique que todos los datos estén completos",
            text:'',
            footer: '<a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Aceptar</a>'
          });
        }
      )
    }
  }

}
