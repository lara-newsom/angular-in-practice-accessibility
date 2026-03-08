import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  galleryImages = signal([
    {
      imageSrc: 'assets/medium/lobby_1.jpg',
      linkRoute: '/about',
      linkTitle: 'About Us'
    },
    {
      imageSrc: 'assets/medium/room_1.jpg',
      linkRoute: '/rooms',
      linkTitle: 'View our Rooms'
    },
    {
      imageSrc: 'assets/medium/amenities_1.jpg',
      linkRoute: '/amenities',
      linkTitle: 'Explore our Amenities'
    }
  ]);
}
