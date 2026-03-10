import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export interface BreadcrumbSegment {
  route: string;
  title: string;
}

@Component({
  selector: 'app-breadcrumbs',
  imports: [RouterLink],
  templateUrl: './breadcrumbs.html',
  styleUrl: './breadcrumbs.scss',
})
export class Breadcrumbs {
  segments = input.required<BreadcrumbSegment[]>();
}
