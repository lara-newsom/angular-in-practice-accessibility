import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageData } from '../../image-data';

@Component({
  selector: 'app-image-card',
  imports: [CommonModule],
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  imageData = input.required<ImageData>();
}
