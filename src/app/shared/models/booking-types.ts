import { signal } from "@angular/core";

export interface RoomSelection {
  name: string;
  quantity: ReturnType<typeof signal<number>>;
}

export interface GuestBooking {
  name: string;
  phone: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  rooms: RoomSelection[];
}
