import { Component } from '@angular/core';
import { MenuComponent } from "../../components/menu/menu-component/menu-component.component";
import { HistoryComponent } from '../history/history.component';


@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [MenuComponent,HistoryComponent]
})
export class HomeComponent {

}
