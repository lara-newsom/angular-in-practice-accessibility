import { ChangeDetectionStrategy, Component, DOCUMENT, effect, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Navigation } from './navigation/navigation';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navigation],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly routerEvents = toSignal(this.router.events);

  protected focusFirstHeading(): void {
    const main = this.document.querySelector<HTMLElement>('main');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus();
      return;
    }
  }

  navigationEndEffect = effect(() => {
    const event = this.routerEvents();
    if (event instanceof NavigationEnd) {
      this.focusFirstHeading();
    }
  })
}
