import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { PrestamosComponent } from '../../prestamos/prestamos/prestamos.component';

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [RouterOutlet,PrestamosComponent],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponent{
  constructor(private router:Router){}


  createClient() {
    this.router.navigate(["create/client"])
  }
  cerrarSesion(){
    this.router.navigate(["login"])
  }

  createPrestamo(){
    this.router.navigate(["create/prestamo"])
  }

  openViewProfile(){
    this.router.navigate(["profile"])
  }

}
