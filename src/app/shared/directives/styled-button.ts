import { Directive } from '@angular/core';

@Directive({
  selector: 'button[appStyledButton], a[appStyledButton]',
  host: {
    'class': 'styled-button',
  }
})
export class StyledButton {
}
