import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderContent } from '../shared/main-content/header-content/header-content';
import { SubHeaderContent } from '../shared/main-content/sub-header-content/sub-header-content';
import {
  AccordionGroup,
  AccordionTrigger,
  AccordionPanel,
  AccordionContent,
} from '@angular/aria/accordion';

@Component({
  selector: 'app-about',
  imports: [
    HeaderContent,
    SubHeaderContent,
    AccordionGroup,
    AccordionTrigger,
    AccordionPanel,
    AccordionContent,
  ],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class About {
}
