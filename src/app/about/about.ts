import { Component } from '@angular/core';
import { ImageCard } from '../shared/image-card/image-card';
import { LOBBY_IMAGES, ImageData } from '../image-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [ImageCard, RouterLink],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  images: ImageData[] = LOBBY_IMAGES;
}
