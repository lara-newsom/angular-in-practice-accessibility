import { Component } from '@angular/core';
import { RoomType, ROOM_TYPES } from '../shared/models/room-types';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-rooms',
  imports: [ RouterLink, NgOptimizedImage],
  templateUrl: './rooms.html',
  styleUrls: ['./rooms.scss']
})
export class Rooms {
  rooms: RoomType[] = ROOM_TYPES;
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
