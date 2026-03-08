import { DetailViewConfig } from '../../shared/details/detail-view-config.model';
import { RoomType } from '../../shared/models/room-types';

export const getRoomDetailViewConfig = (room: RoomType): DetailViewConfig => {
  return {
      mainHeaderTitle: room.name,
      imageSrc: room.images.medium,
      imageAlt: `Image of ${room.name} room`,
      detailSubHeaderTitle: 'Room Details',
      detailKeyValuePairs: [
        { key: 'Room Type', value: room.name },
        { key: 'Description', value: room.description },
        { key: 'Occupancy', value: `${room.maxOccupancy} guests` },
        { key: 'Price', value: `$${room.pricePerNight} per night` },
      ],
      detailListHeaderTitle: 'In-room Amenities',
      detailListItems: room.amenities,
      buttonRouterLink: ['/booking'],
      buttonLabel: 'Book Now'
    }
}
