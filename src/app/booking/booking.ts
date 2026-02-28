import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';
import { ROOM_TYPES } from '../shared/models/room-types';
import { CurrencyPipe } from '@angular/common';
import { GuestBooking } from '../shared/models/booking-types';
import { Reservation } from '../reservation/reservation';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, of, tap } from 'rxjs';

@Component({
  selector: 'app-booking',
  imports: [FormField, CurrencyPipe, Reservation],
  templateUrl: './booking.html',
  styleUrl: './booking.scss',
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
  bookingStatuses = ['started', 'booking', 'booked'] as const;

  today = new Date();

  bookingForm = form(this.bookingDetails, (schemaPath) => {
    required(schemaPath.name, {message: 'Name is required'});
    required(schemaPath.phone, {message: 'Phone is required'});
    required(schemaPath.checkInDate, {message: 'Check-in date is required'});
    required(schemaPath.checkOutDate, {message: 'Check-out date is required'});
    required(schemaPath.guests, {message: 'Number of guests is required'});
    required(schemaPath.rooms, {
      message: 'Select at least one room',
      when: ({valueOf}) => valueOf(schemaPath.rooms).length === 0
    });
    validate(schemaPath.checkInDate, ({value}) => {
      const today = new Date();
      const checkInDate = new Date(value());
      return checkInDate >= today ? null : {kind: 'checkInDateHasPassed', message: 'Check-in date cannot be in the past'};
    });
    validate(schemaPath.checkOutDate, ({value, valueOf}) => {
      const checkInDate = new Date(valueOf(schemaPath.checkInDate));
      const checkOutDate = new Date(value());
      return checkOutDate >= checkInDate ? null : {kind: 'checkOutDateIncorrect', message: 'Check-out date cannot be before or the same as check-in date'};
    });
  });
  bookingComplete = signal(false);
  bookingStatus = signal<'started' | 'booking' | 'booked'>('started');
  bookingDelay = of('started').pipe(
    takeUntilDestroyed(),
    delay(2000),
    tap(() => this.bookingStatus.set('booking')),
    delay(2000),
    tap(() => this.bookingStatus.set('booked'))
  );

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
      this.bookingDelay.subscribe();
    }
  }
}
