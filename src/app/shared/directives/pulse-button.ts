import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'button[appPulseButton], a[appPulseButton]',
  standalone: true,
  host: {
    'class': 'pulse-button',
    '[style.animation]': 'animation()',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class PulseButton {
  protected animation = signal('');

  onMouseEnter() {
    this.animation.set('pulse 1.5s 3');
  }

  onMouseLeave() {
    this.animation.set('');
  }
}
