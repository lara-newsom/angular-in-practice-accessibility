import { Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AnchorButton } from '../shared/buttons/directives/anchor-button';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink, AnchorButton],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  galleryImages = signal([
    {
      src: 'assets/medium/lobby_1.jpg',
      route: '/about',
      cta: 'About Us'
    },
    {
      src: 'assets/medium/room_1.jpg',
      route: '/rooms',
      cta: 'View our Rooms'
    },
    {
      src: 'assets/medium/amenities_1.jpg',
      route: '/amenities',
      cta: 'Explore our Amenities'
    }
  ]);
}
