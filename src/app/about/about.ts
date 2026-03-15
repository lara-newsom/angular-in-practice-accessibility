import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderContent } from '../shared/main-content/header-content/header-content';
import { SubHeaderContent } from "../shared/main-content/sub-header-content/sub-header-content";

@Component({
  selector: 'app-about',
  imports: [HeaderContent, SubHeaderContent],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
}
