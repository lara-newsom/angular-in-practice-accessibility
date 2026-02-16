import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageData } from '../../image-data';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule],
  templateUrl: './image-card.html',
  styleUrls: ['./image-card.scss']
})
export class ImageCard {
  imageData = input.required<ImageData>();
}
