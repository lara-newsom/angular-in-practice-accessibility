import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from '../shared/image-card/image-card.component';
import { AMENITIES_IMAGES, ImageData } from '../image-data';

@Component({
  selector: 'app-amenities',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './amenities.component.html',
  styleUrls: ['./amenities.component.scss']
})
export class AmenitiesComponent {
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
