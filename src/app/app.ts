import { ChangeDetectionStrategy, Component, DOCUMENT, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly document = inject(DOCUMENT);

  protected focusFirstHeading(): void {
    const main = this.document.querySelector<HTMLElement>('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus();
      return;
    }
  }
}
