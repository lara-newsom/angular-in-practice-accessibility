
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StyledButton } from '../directives/styled-button';

@Component({
  selector: 'app-booking-button',
  imports: [RouterLink, StyledButton],
  // Use an absolute route so it works regardless of where the button is used in the app
  template: `<a routerLink="/book" appStyledButton>Book Now</a>`,
})
export class BookingButton {
}
