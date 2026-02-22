import { Component, DOCUMENT, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly document = inject(DOCUMENT);
  protected readonly title = signal('angular-in-practice-accessibility');

  protected focusFirstHeading(): void {
    const main = this.document.querySelector<HTMLElement>('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus();
      return;
    }

    // Fallback: focus the first h1 (legacy support for pages without main)
    const h1 = this.document.querySelector<HTMLHeadingElement>('h1:not(docs-top-level-banner h1)');
    h1?.focus();
  }

}
