import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';
import { authService } from '../../../services/auth/auth-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router : Router, private authServiceClient : authService){}

// Formulario para login 
  formAuth = new FormGroup({
    Email : new FormControl(),
    Password: new FormControl(),
  });

  logIn():void{
<<<<<<< HEAD
    console.log(this.formAuth.value)
    this.authServiceClient.logIn(this.formAuth.value).
    subscribe(
      (res:any)=>{
      if(res){
        
        Swal.fire({
          icon: "success",
          title: `Bienvenido`,
        });
        this.router.navigate(['home']);
      }
    },err=>{
      Swal.fire({
        icon: "error",
        title: "Ha ocurrido un error",
        text: err.error.message,
        footer: '<a href="/register" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Registrarse</a>'
      });
    }
  )
=======
    this.router.navigate(['home'])
>>>>>>> dev-front
  }
}
