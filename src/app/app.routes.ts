import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RoomsComponent } from './rooms/rooms.component';
import { AmenitiesComponent } from './amenities/amenities.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'amenities', component: AmenitiesComponent },
  { path: 'about', component: AboutComponent },
  // NOTE: Book and Contact components are not yet created.
  // { path: 'book', component: BookComponent },
  // { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page could be added later
];
