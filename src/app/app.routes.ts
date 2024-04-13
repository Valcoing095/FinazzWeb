import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { EditProfileComponentComponent } from './components/editProfile/edit-profile-component/edit-profile-component.component';
import { CreateClientComponent } from './components/clients/create-client/create-client.component';
import { CrearPrestamoComponent } from './components/prestamos/crear-prestamo/crear-prestamo.component';
import { PrestamoDetailComponent } from './components/prestamos/prestamo-detail/prestamo-detail.component';


export const routes: Routes = [

  // {path: '**', pathMatch: 'full', redirectTo: 'login'},https://la.spankbang.com/93fqj/video/my+teacher+can+t+say+no+part+2
  {path: '', component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'edit/profile', component: EditProfileComponentComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'create/prestamo', component: CrearPrestamoComponent},
  {path: 'create/client', component: CreateClientComponent},
  {path: 'prestamos/detail', component: PrestamoDetailComponent}
];
