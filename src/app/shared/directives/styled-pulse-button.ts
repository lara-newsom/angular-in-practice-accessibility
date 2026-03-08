import { Directive } from '@angular/core';
import { PulseButton } from './pulse-button';
import { StyledButton } from './styled-button';

@Directive({
  selector: 'a[appStyledPulseButton], button[appStyledPulseButton]',
  hostDirectives: [StyledButton, PulseButton]
})
export class StyledPulseButton {
}
