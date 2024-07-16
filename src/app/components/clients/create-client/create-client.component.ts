import { Component } from '@angular/core';

// imports para control de formularios
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {

  // Formulario para crearCliente

  formCreateClient = new FormGroup({
    nombre: new FormControl(),
    email : new FormControl(),
    celular  : new FormControl(),
    direccion  : new FormControl()
  })

  // validar formulario
  create(){
    console.log(this.formCreateClient.value)
  }
}
