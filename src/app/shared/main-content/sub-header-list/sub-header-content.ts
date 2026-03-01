import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-header-content',
  imports: [],
  templateUrl: './sub-header-content.html',
  styleUrl: './sub-header-content.scss',
})
export class SubContentList {
  /**
   * 
   */
  subHeaderContentTitle = input.required<string>();
}
