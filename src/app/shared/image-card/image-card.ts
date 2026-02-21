import { Component, input } from '@angular/core';
import { ImageData } from '../../image-data';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.html',
  styleUrls: ['./image-card.scss']
})
export class ImageCard {
  imageData = input.required<ImageData>();
}
