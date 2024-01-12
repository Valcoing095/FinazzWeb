import { Component,OnInit,inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Register } from '../../../interfaces/auth';
import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  responseData: any;
  constructor(private httpService: HttpClient, private router: Router){}
  private formBuilder = inject(FormBuilder) 
  myFrom?: FormGroup

  form: FormGroup = new FormGroup({
    name: new FormControl("" , [Validators.required]),
    email: new FormControl("" , [Validators.required]),
    password: new FormControl("", [Validators.required]),
    edad: new FormControl("", [Validators.required]),
  });
  ngOnInit(): void {
  }

  get f(){
    return this.myFrom?.controls
  }
  

  async submitRegister() {
    const form = this.form?.value;
    const formData: Register = {
      FullName: form.name,
      Email: form.email,
      Password: form.password,
      Age: form.edad
    };

    this.serviceRegister().subscribe(
      (data) => {
        this.responseData = data;
        console.log('Datos de la API:', data);
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
  }
  
   serviceRegister():Observable<Register> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer your_token'
    });
    return this.httpService.post<any>(`http://localhost:3000/api/v1/auth/register`,{headers});
    
  }
}
