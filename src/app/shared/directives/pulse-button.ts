import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'button[appPulseButton], a[appPulseButton]',
  host: {
    '[style.animation]': 'animation()',
    '(mouseenter)': 'onEnter()',
    '(focusin)': 'onEnter()',
    '(mouseleave)': 'onLeave()',
    '(focusout)': 'onLeave()',
  },
})
export class PulseButton {
  protected animation = signal('');

  onEnter() {
    this.animation.set('pulse 1.5s 3');
  }

  onLeave() {
    this.animation.set('');
  }
}
