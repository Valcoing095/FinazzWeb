import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { Router } from '@angular/router';
import { PrestamosComponent } from '../../components/prestamos/prestamos/prestamos.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [HomeComponent,PrestamosComponent]
})
export class ProfileComponent {

  constructor(private router:Router){}
  editUser(){
    this.router.navigate(["edit/profile"])
  }

}
