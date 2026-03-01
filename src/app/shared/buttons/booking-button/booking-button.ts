import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnchorButton } from '../directives/anchor-button';

@Component({
  selector: 'app-booking-button',
  imports: [RouterLink, AnchorButton],
  // Use an absolute route so it works regardless of where the button is used in the app
  template: `<a routerLink="/book" appAnchorButton>Book Now</a>`,
})
export class BookingButton {
}
