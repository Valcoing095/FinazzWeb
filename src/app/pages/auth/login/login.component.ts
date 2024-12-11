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
    this.router.navigate(['home'])
  }
}
