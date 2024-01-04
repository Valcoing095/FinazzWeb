import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { HistoryComponent } from '../../../pages/history/history.component';


@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [RouterOutlet,HistoryComponent],
  templateUrl: './menu-component.component.html',
  styleUrl: './menu-component.component.css'
})
export class MenuComponent{
  constructor(private router:Router){

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
