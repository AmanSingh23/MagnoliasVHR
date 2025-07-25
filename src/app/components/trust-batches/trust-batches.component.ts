import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trust-batches',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './trust-batches.component.html',
  styleUrl: './trust-batches.component.scss'
})
export class TrustBatchesComponent {
  @Input() badges: Array<{ icon: string, text: string }> = [];
}
