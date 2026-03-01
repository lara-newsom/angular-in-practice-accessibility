import { Component, input } from '@angular/core';
import { BookingButton } from '../../buttons/booking-button/booking-button';

@Component({
  selector: 'app-main-content-header',
  imports: [BookingButton],
  templateUrl: './main-content-header.html',
  styleUrl: './main-content-header.scss',
})
export class MainContent {
  /**
   * The displayed h1 title element for this section
   */
  contentHeader = input.required<string>();
}
