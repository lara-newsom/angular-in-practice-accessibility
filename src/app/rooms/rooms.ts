import { Component } from '@angular/core';
import { ImageCard } from '../shared/image-card/image-card';
import { ROOM_IMAGES, ImageData } from '../image-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rooms',
  imports: [ ImageCard, RouterLink],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss']
})
export class Rooms {
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
