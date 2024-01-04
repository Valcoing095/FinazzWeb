import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { Router } from '@angular/router';
import { HistoryComponent } from '../history/history.component';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [HomeComponent,HistoryComponent]
})
export class ProfileComponent {

  constructor(private router:Router){}
  editUser(){
    this.router.navigate(["edit/profile"])
  }

}
