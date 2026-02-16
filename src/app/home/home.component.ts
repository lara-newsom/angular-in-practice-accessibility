import { Component, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  galleryImages = signal([
    {
      src: 'assets/medium/lobby_1.jpg',
      alt: 'A view of the hotel lobby from the entrance, showing the reception desk and a seating area.',
      route: '/about',
      cta: 'About Us'
    },
    {
      src: 'assets/medium/room_1.jpg',
      alt: 'A clean and modern hotel room with a made bed, a small desk, and a window with a city view.',
      route: '/rooms',
      cta: 'View our Rooms'
    },
    {
      src: 'assets/medium/ammenities_1.jpg',
      alt: 'The hotel\'s indoor swimming pool with lounge chairs lined up along the side.',
      route: '/amenities',
      cta: 'Explore our Amenities'
    }
  ]);
}
