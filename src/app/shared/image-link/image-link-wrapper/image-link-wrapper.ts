import { Component, input } from '@angular/core';
import { ImageLink } from './image-link.model';
import { ImageLinkCard } from '../image-link-card/image-link-card';

@Component({
  selector: 'app-image-link-wrapper',
  imports: [ImageLinkCard],
  templateUrl: './image-link-wrapper.html',
  styleUrl: './image-link-wrapper.scss',
})
export class ImageLinkWrapper {
  /**
   * The displayed h2 title element for this section
   */
  linkWrapperTitle = input.required<string>();
  /**
   * The array of image links to be displayed in this section
   */
  imageLinks = input.required<ImageLink[]>();
}
