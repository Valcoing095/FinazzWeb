import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu-component/menu-component.component";
import { HttpClientModule } from '@angular/common/http';
import { PrestamosComponent } from './components/prestamos/prestamos/prestamos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent,PrestamosComponent,HttpClientModule]
})
export class AppComponent {
  title = 'inlazeFriendsWeb';
}
