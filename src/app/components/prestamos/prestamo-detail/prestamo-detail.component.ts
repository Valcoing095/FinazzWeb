import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamo-detail',
  standalone: true,
  imports: [],
  templateUrl: './prestamo-detail.component.html',
  styleUrl: './prestamo-detail.component.css'
})
export class PrestamoDetailComponent {

  public isOpen = false;

  openModal(): void {
    this.isOpen = true;
    
  }

  closeModal(): void {
    this.isOpen = false;
  }
}
