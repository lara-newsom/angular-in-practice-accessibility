import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from '../shared/image-card/image-card.component';
import { LOBBY_IMAGES, ImageData } from '../image-data';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ImageCardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  images: ImageData[] = LOBBY_IMAGES;
}
