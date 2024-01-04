import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./components/menu/menu-component/menu-component.component";
import { HistoryComponent } from './pages/history/history.component';
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, MenuComponent,HistoryComponent,HttpClientModule]
})
export class AppComponent {
  title = 'inlazeFriendsWeb';
}
