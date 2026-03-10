import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ROOM_TYPES } from '../shared/models/room-types';
import { ImageLinkWrapper } from '../shared/image-link/image-link-wrapper';
import { ImageLink } from '../shared/image-link/image-link.model';
import { HeaderContent } from '../shared/main-content/header-content/header-content';
import { SubHeaderContent } from '../shared/main-content/sub-header-content/sub-header-content';

@Component({
  selector: 'app-rooms',
  imports: [ ImageLinkWrapper, HeaderContent, SubHeaderContent ],
  templateUrl: './rooms.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Rooms {
  rooms: ImageLink[] = ROOM_TYPES.map(room => ({
    linkRoute: ['/rooms', room.name],
    imageSrc: room.images.medium,
    linkTitle: room.name
  }));

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
