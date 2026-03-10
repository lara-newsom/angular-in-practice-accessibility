import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROOM_TYPES } from '../shared/models/room-types';
import { RouterLink } from '@angular/router';
import { ImageLinkWrapper } from '../shared/image-link/image-link-wrapper';
import { ImageLink } from '../shared/image-link/image-link.model';

@Component({
  selector: 'app-rooms',
  imports: [ RouterLink, ImageLinkWrapper ],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rooms {
  rooms: ImageLink[] = ROOM_TYPES.map(room => ({
    linkRoute: ['/rooms', room.name],
    imageSrc: room.images.medium,
    linkTitle: room.name
  }));
  // map rooms to ImageLink objects for use with the ImageLinkWrapper

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
