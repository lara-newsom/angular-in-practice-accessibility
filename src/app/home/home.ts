import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  galleryImages = signal([
    {
      src: 'assets/medium/lobby_1.jpg',
      alt: 'Learn more about The Every Hotel',
      route: '/about',
      cta: 'About Us'
    },
    {
      src: 'assets/medium/room_1.jpg',
      alt: 'Learn more about our rooms and suites',
      route: '/rooms',
      cta: 'View our Rooms'
    },
    {
      src: 'assets/medium/amenities_1.jpg',
      alt: 'Learn more about our amenities and services',
      route: '/amenities',
      cta: 'Explore our Amenities'
    }
  ]);

  router = inject(Router);
  route = inject(ActivatedRoute);

  navigateToRoute(route: string) {
    this.router.navigate([route], { relativeTo: this.route });
  }
}
