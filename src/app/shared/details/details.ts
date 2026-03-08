import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DetailViewConfig } from './detail-view-config.model';
import { Breadcrumbs, BreadcrumbSegment } from '../breadcrumbs/breadcrumbs';

@Component({
  selector: 'app-details',
  imports: [NgOptimizedImage, RouterLink, Breadcrumbs],
  templateUrl: './details.html',
  styleUrl: './details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Details {
  config = input.required<DetailViewConfig>();

  breadcrumbSegments = input.required<BreadcrumbSegment[]>();
}
