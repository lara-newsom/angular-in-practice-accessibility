import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AMENITIES } from '../shared/models/amenity-types';
import { ImageLinkWrapper } from '../shared/image-link/image-link-wrapper';
import { HeaderContent } from '../shared/main-content/header-content/header-content';
import { SubHeaderContent } from "../shared/main-content/sub-header-content/sub-header-content";

@Component({
  selector: 'app-amenities',
  imports: [ImageLinkWrapper, HeaderContent, SubHeaderContent],
  templateUrl: './amenities.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Amenities {
  amenities = AMENITIES.map((amenity) => ({
    linkRoute: ['/amenities', amenity.name],
    imageSrc: amenity.images.src.medium,
    linkTitle: amenity.name,
  }));
  hotelAmenities: string[] = [
  '24/7 Room Service',
  'Rooftop Pool with City Views',
  'State-of-the-Art Fitness Center',
  'Gourmet On-Site Dining',
  'High-Speed Wi-Fi',
  'Eco-Friendly Initiatives',
  'Pet-Friendly Accommodations'
  ];
}
