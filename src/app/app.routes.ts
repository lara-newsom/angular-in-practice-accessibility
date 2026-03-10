import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { Amenities } from './amenities/amenities';
import { About } from './about/about';
import { Booking } from './booking/booking';
import { RoomDetails } from './rooms/room-details/room-details';
import { AmenityDetails } from './amenities/amenities-details/amenities-details';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'rooms', component: Rooms },
  { path: 'rooms/:roomId', component: RoomDetails },
  { path: 'amenities', component: Amenities },
  { path: 'amenities/:amenityId', component: AmenityDetails },
  { path: 'about', component: About },
  { path: 'book', component: Booking },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
