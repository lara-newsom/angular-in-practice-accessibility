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
}
