import { DetailViewConfig } from '../../shared/details/detail-view-config.model';
import { Amenity } from '../../shared/models/amenity-type';

export const getAmenityDetailViewConfig = (amenity: Amenity): DetailViewConfig => {
  return {
      mainHeaderTitle: amenity.name,
      imageSrc: amenity.images.src.medium,
      imageAlt: amenity.images.alt,
      detailSubHeaderTitle: `${amenity.name} Details`,
      detailKeyValuePairs: [
        { key: 'Description', value: amenity.description },
      ],
      detailListHeaderTitle: 'Available Features',
      detailListItems: amenity.details,
      buttonRouterLink: ['/booking'],
      buttonLabel: 'Book Now'
    }
}
