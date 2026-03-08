import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RoomType, ROOM_TYPES } from '../../shared/models/room-types';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Details {
  roomId = input.required<string>();

  roomData = computed<RoomType | undefined>(() => {
    const id = this.roomId();
    if (id === null) return undefined;
    return ROOM_TYPES.find(room => room.name === id);
  });
}
