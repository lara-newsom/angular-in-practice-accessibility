import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StyledPulseButton } from '../shared/directives/styled-pulse-button';
import { ImageLink } from '../shared/image-link/image-link.model';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink, StyledPulseButton],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  galleryImages = signal<ImageLink[]>([
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
