import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ROOM_TYPES } from '../shared/models/room-types';
import { CurrencyPipe } from '@angular/common';
import { GuestBooking } from '../shared/models/booking-types';
import { Reservation } from '../reservation/reservation';

@Component({
  selector: 'app-booking',
  imports: [FormField, CurrencyPipe, Reservation],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Booking {
  bookingDetails = signal<GuestBooking>({
    name: '',
    phone: '',
    checkInDate: '',
    checkOutDate: '',
    guests: 1,
    rooms: [],
  });

  ROOM_TYPES = ROOM_TYPES;

  bookingForm = form(this.bookingDetails);
  bookingComplete = signal(false)

  updateRooms(roomName: string){
    const existingRoom = this.bookingDetails().rooms.find(r => r.name === roomName);
    if (existingRoom) {
      existingRoom.quantity.update(q => q + 1);
    } else {
      this.bookingDetails.update(details => ({
        ...details,
        rooms: [...details.rooms, { name: roomName, quantity: signal(1) }]
      }));
    }
  }

  book(event: Event) {
    event.preventDefault(); // Prevent default form submission behavior
    if (this.bookingForm().valid()) {
      this.bookingComplete.set(true);
    }
  }
}
