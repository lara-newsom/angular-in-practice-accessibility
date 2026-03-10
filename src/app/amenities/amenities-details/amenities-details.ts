import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { AMENITIES } from '../../shared/models/amenity-type';
import { getAmenityDetailViewConfig } from './amenities-details-mapper';
import { DetailViewConfig } from '../../shared/details/detail-view-config.model';
import { Details } from '../../shared/details/details';

@Component({
  selector: 'app-amenity-details',
  imports: [Details],
  templateUrl: './amenities-details.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AmenityDetails {
  amenityId = input.required<string>();

  amenityData = computed<DetailViewConfig | undefined>(() => {
    const id = this.amenityId();
    if (id === null) return undefined;
    const amenity = AMENITIES.find(amenity => amenity.name === id);

    if (!amenity) return undefined;
    return getAmenityDetailViewConfig(amenity);
  });

  breadcrumbSegments = computed(() => {
    const data = this.amenityData();
    if (!data) return [];
    return [
      { route: '/amenities', title: 'Amenities' },
      { route: '/detail', title: data.mainHeaderTitle }
    ];
  })
}
