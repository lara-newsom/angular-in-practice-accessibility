import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Rooms } from './rooms/rooms';
import { Amenities } from './amenities/amenities';
import { About } from './about/about';
import { Booking } from './booking/booking';
import { RoomDetails } from './rooms/room-details/room-details';
import { AmenityDetails } from './amenities/amenities-details/amenities-details';

export const routes: Routes = [
  { path: 'home', component: Home, title: 'The Every Hotel - Home' },
  { path: 'rooms', component: Rooms, title: 'The Every Hotel - Rooms' },
  { path: 'rooms/:roomId', component: RoomDetails,  title: 'The Every Hotel - Room Details' },
  { path: 'amenities', component: Amenities, title: 'The Every Hotel - Amenities' },
  { path: 'amenities/:amenityId', component: AmenityDetails, title: 'The Every Hotel - Amenity Details' },
  { path: 'about', component: About, title: 'The Every Hotel - About Us' },
  { path: 'book', component: Booking, title: 'The Every Hotel - Book Now' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];
