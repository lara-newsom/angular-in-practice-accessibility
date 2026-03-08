import { Component, input } from '@angular/core';

@Component({
  selector: 'app-sub-header-content',
  imports: [],
  templateUrl: './sub-header-content.html',
  styleUrl: './sub-header-content.scss',
})
export class SubHeaderContent {
  /**
   * The displayed h2 title element for this section
   * This title is also used to label the region
   */
  subHeaderContentTitle = input.required<string>();
}
