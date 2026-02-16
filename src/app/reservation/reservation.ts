import { Component, input } from '@angular/core';
import { GuestBooking } from '../shared/models/booking-types';
import { ROOM_IMAGES } from '../image-data';
import { DatePipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-reservation',
  imports: [NgOptimizedImage, DatePipe],
  templateUrl: './reservation.html',
  styleUrl: './reservation.scss',
})
export class Reservation {
  booking = input.required<GuestBooking>();
  roomImage = ROOM_IMAGES[0];
}
