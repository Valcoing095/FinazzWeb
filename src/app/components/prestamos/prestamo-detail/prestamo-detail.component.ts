import { Component, EventEmitter, Output } from '@angular/core';
import { PrestamosComponent } from '../prestamos/prestamos.component';

@Component({
    selector: 'app-prestamo-detail',
    standalone: true,
    templateUrl: './prestamo-detail.component.html',
    styleUrl: './prestamo-detail.component.css',
    imports: [PrestamosComponent]
})
export class PrestamoDetailComponent {

  // @Output() detailPrestamo = new EventEmitter(); //Para recibir un e,,it de otro componente, en etes caso prestamos

  public isOpen = false;

  // detailPrestamo(event:any){
  //   console.log(event)
  // }

  openModal(): void {
    this.isOpen = true;

  }

  closeModal(): void {
    this.isOpen = false;
  }
}
