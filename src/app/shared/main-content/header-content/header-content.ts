import { Component, input } from '@angular/core';
import { BookingButton } from '../../buttons/booking-button';

@Component({
  selector: 'app-header-content',
  imports: [BookingButton],
  templateUrl: './header-content.html',
  styleUrl: './header-content.scss',
})
export class HeaderContent {
  /**
   * The displayed h1 title element for this section
   */
  mainHeader = input.required<string>();
}
