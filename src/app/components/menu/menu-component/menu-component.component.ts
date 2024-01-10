import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { PrestamosComponent } from '../../../pages/prestamos/prestamos.component';

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

  openViewHistory(){
    this.router.navigate(["create/history"])
  }

  openViewProfile(){
    this.router.navigate(["profile"])
  }

}
