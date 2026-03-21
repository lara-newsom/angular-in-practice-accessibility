import { booleanAttribute, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StyledPulseButton } from '../../directives/styled-pulse-button';

@Component({
  selector: 'app-header-content',
  imports: [RouterLink, StyledPulseButton],
  templateUrl: './header-content.html',
  styleUrl: './header-content.scss',
})
export class HeaderContent {
  /**
   * The displayed h1 title element for this section
   */
  mainHeader = input.required<string>();
  hideButton = input(false, { transform: booleanAttribute});
  ariaLive = input(false, { transform: booleanAttribute });
}
