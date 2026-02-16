import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from '../shared/image-card/image-card.component';
import { ROOM_IMAGES, ImageData } from '../image-data';

@Component({
  selector: 'app-rooms',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: ImageData[] = ROOM_IMAGES;
  amenities = [
    'Plush queen-sized beds',
    'High-speed Wi-Fi',
    'Flat-screen TV with streaming services',
    'Mini-refrigerator',
    'Coffee and tea maker',
    'In-room safe',
    'Iron and ironing board',
    'Hairdryer',
    'Luxury toiletries'
  ];
}
