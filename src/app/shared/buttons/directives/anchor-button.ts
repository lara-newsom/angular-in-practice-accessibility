import { Directive } from '@angular/core';

@Directive({
  selector: 'button[appAnchorButton], a[appAnchorButton]',
  host: {
    'class': 'styled-button',
  }
})
export class AnchorButton {
}
