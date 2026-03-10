import { Component, computed, input } from '@angular/core';
import { ROOM_TYPES } from '../../shared/models/room-types';
import { getRoomDetailViewConfig } from './room-details-mapper';
import { DetailViewConfig } from '../../shared/details/detail-view-config.model';
import { Details } from '../../shared/details/details';

@Component({
  selector: 'app-room-details',
  imports: [Details],
  templateUrl: './room-details.html',
})
export class RoomDetails {
  roomId = input.required<string>();

  roomData = computed<DetailViewConfig | undefined>(() => {
    const id = this.roomId();
    if (id === null) return undefined;
    const room = ROOM_TYPES.find(room => room.name === id);

    if (!room) return undefined;
    return getRoomDetailViewConfig(room);
  });

  breadcrumbSegments = computed(() => {
    const data = this.roomData();
    if (!data) return [];
    return [
      { route: '/rooms', title: 'Rooms' },
      { route: '/detail', title: data.mainHeaderTitle }
    ];
  })
}
