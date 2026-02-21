import { Component, computed, input } from '@angular/core';
import { RoomType, ROOM_TYPES } from '../../shared/models/room-types';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  roomId = input.required<string>();

  roomData = computed<RoomType | undefined>(() => {
    const id = this.roomId();
    if (id === null) return undefined;
    return ROOM_TYPES.find(room => room.name === id);
  });
}
