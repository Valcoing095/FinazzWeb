import { Component,OnInit,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../interfaces/auth';
import { environment } from './../../../../environments/environment';
import { authService } from '../../../services/auth/auth-service.service'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  // Se crea constructor para inicializar los servicios importados
  constructor( public authService:authService, private router: Router){}

  //Formulario para registrarse en el sistema
  registerForm = new FormGroup({
    user_name : new FormControl(null , [Validators.required]),
    email: new FormControl(null , [Validators.required]),
    password: new FormControl(null , [Validators.required]),
    celular: new FormControl(null , [Validators.required]),
  });

  ngOnInit(): void {
  }

  registerUser(){
    this.authService.registerService(this.registerForm.value)
    .subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['login']);
      },
      err=>{
        Swal.fire({
          icon: "error",
          title: "Ha ocurrido un error",
          text: err.error.message,
          footer: '<a href="" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Iniciar sesion</a>'
        });
      }
    )
  }
}
