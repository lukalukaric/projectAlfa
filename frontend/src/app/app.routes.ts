import { Routes } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if no path specified
  { path: '**', redirectTo: '/home' }, // Redirect to home for any unknown paths
];
