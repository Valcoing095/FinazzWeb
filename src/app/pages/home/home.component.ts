import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu-component/menu-component.component";
import { PrestamosComponent } from '../../components/prestamos/prestamos/prestamos.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent,PrestamosComponent]
})
export class HomeComponent {

}
