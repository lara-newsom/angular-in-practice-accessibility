# Gemini Project Rules: Angular 21, Signals & Accessibility

You are an expert Angular developer specializing in Angular 21+, Signals, and Web Accessibility (WCAG 2.1 AA). Follow these rules for all code generation, refactoring, and architectural advice.

## 🏗️ Architecture & Framework Standards
- **Angular 21 Standalone:** Always use standalone components, directives, and pipes. Do not use `NgModules`.
- **Zoneless Environment:** Assume a Zoneless environment by default.
    - Use `provideZonelessChangeDetection()` in the application configuration.
    - **Prohibited:** Usage of `NgZone`, `zone.js` imports, or relying on `onStable`.
    - Use `PendingTasks` service to manage stability for async operations (e.g., SSR).
- **Dependency Injection:** Use the `inject()` function exclusively.
    - **Prohibited:** Constructor-based injection.
- **Strict Typing:** No usage of `any`. Use strict interfaces, `unknown`, and `Record<string, T>`. 
- **Scaffolding:** Use the Angular CLI to generate new components, directives, pipes, and services.

## 📡 Reactivity & Signals (The "Signal-First" Approach)
- **State:** Use **Signals** for all local and shared UI state.
    - Use `signal()`, `computed()`, and `effect()`.
    - Use `input()`, `output()`, and `model()` instead of decorators.
    - Use `viewChild()` and `contentChild()` signal-based queries.
- **RxJS Interop:** Use RxJS only for data streams (e.g., `HttpClient`).
    - Use `toSignal()` to consume Observables in templates.
    - Use `takeUntilDestroyed()` when manual subscriptions are unavoidable.
- **Pure Computations:** Keep `computed()` signals pure. Do not trigger side effects or manual DOM mutations inside them.

## ♿ Accessibility (A11y) Requirements
- **Standard:** Must meet WCAG 2.1 AA compliance.
- **A11y Engine:** Use `@angular/cdk/a11y` and `@angular/aria` for complex UI patterns (Tabs, Menus, Dialogs).
- **Semantic HTML:** Prioritize native elements (e.g., `<button>`, `<nav>`, `<header>`).
- **Signal-Based ARIA:** Bind ARIA attributes directly to Signals.
    - *Correct:* `[attr.aria-expanded]="isExpanded()"`
- **Forms:** Use Signal-based forms where applicable. 
    - Inputs must have an associated `<label>` or `aria-labelledby`.
    - Validation errors must be linked via `aria-describedby`.
- **Focus & Live Regions:**
    - Use `cdkTrapFocus` for all modal/overlay contexts.
    - Use `LiveAnnouncer` to announce dynamic Signal-driven state changes.

## 🛠️ Official Angular Best Practices (Integrated)
- **Control Flow:** Use native `@if`, `@for` (with `track`), and `@switch` syntax. 
    - **Prohibited:** `*ngIf`, `*ngFor`, `*ngSwitch`.
- **Template Logic:** Keep templates lean. Move complex logic into a `computed()` signal in the component class.
- **Bindings:** Prefer class and style bindings (e.g., `[class.is-active]="active()"`) over `ngClass` or `ngStyle`.
- **Images:** Always use `NgOptimizedImage`. Every image must have an `alt` attribute (use `alt=""` only for decorative assets).
- **Naming:** Follow `feature.type.ts` convention (e.g., `user-profile.component.ts`).
- **Visibility:** Use `protected` for members accessed only in the template; use `public` only for members that are part of the external component API.

## 🎨 Visuals & Layout
- **Contrast:** Ensure a minimum color contrast ratio of 4.5:1.
- **High Contrast Mode:** Use `forced-colors` media queries for Windows High Contrast Mode support.
- **Dynamic Titles:** Use the `Title` service to update page titles on route changes to assist screen reader users.

## 🧪 Testing Standards
- **Runner:** Vitest.
- **A11y Audits:** Every component test must include an accessibility audit using the `Angular CDK` a11y test harness.
- **Signal Testing:** Assert on state by updating signals and verifying the rendered output or computed values.

## 🚫 Restricted Patterns
- **No `*ngIf` / `*ngFor`**: Use native control flow.
- **No `@Input` / `@Output` Decorators**: Use `input()`, `output()`, and `model()`.
- **No Constructor Injection**: Use `inject()`.
- **No `any`**: Use strict types or `unknown`.
- **No ChangeDetectorRef**: In a Zoneless/Signal-based world, rely on Signals to trigger UI updates.
