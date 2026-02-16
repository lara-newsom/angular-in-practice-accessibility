import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { Amenities } from './amenities/amenities';
import { About } from './about/about';
import { Booking } from './booking/booking';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'amenities', component: Amenities },
  { path: 'about', component: About },
  { path: 'book', component: Booking },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
