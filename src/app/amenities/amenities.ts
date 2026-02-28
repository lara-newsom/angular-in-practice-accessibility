import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCard } from '../shared/image-card/image-card';
import { AMENITIES_IMAGES, ImageData } from '../image-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-amenities',
  imports: [CommonModule, ImageCard, RouterLink],
  templateUrl: './amenities.html',
  styleUrls: ['./amenities.scss']
})
export class Amenities {
  amenities: ImageData[] = AMENITIES_IMAGES;
  sharedAmenities: string[] = [
    '24-hour front desk',
    'Rooftop pool',
    'Fitness center',
    'On-site restaurant and bar',
    'Room service',
    'Free Wi-Fi',
    'Concierge services',
    'Business center',
    'Valet parking',
    'Pet-friendly rooms'
  ];
}
