import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestamo-detail',
  standalone: true,
  imports: [],
  templateUrl: './prestamo-detail.component.html',
  styleUrl: './prestamo-detail.component.css'
})
export class PrestamoDetailComponent {

  constructor(private route: Router) { }
  public isOpen = false;

  openModal(): void {
    this.isOpen = true;
    
  }

  closeModal(): void {
    this.isOpen = false;
  }

  newPrestamo():void{
    this.route.navigate(["create/prestamo"])
  }
}
