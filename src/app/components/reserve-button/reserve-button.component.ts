import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reserve-button',
  standalone: true,
  imports: [NgFor],
  templateUrl: './reserve-button.component.html',
  styleUrl: './reserve-button.component.scss'
})
export class ReserveButtonComponent {
  // Button text split into individual characters for animation
  buttonText = ['R', 'E', 'S', 'E', 'R', 'V', 'E', '', 'N', 'O', 'W'];
}
