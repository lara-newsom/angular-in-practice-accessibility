import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-image-link-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './image-link-card.html',
  styleUrl: './image-link-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageLinkCard {
  /**
   * The route to navigate to when the card is clicked using routerLink
   */
  linkRoute = input.required<string | string[]>();
  /**
   * The source of the image to display in the card
   * Display size 375px X 500px
   */
  imageSrc = input.required<string>();
  /**
   * The displayed title of the card
   */
  linkTitle = input.required<string>();
  /**
   * Optional label for the link
   * If provided this label will be announced by screen readers instead of the linkTitle
   */
  linkLabel = input<string>();
}
