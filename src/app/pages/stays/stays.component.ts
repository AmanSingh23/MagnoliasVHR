import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ReserveButtonComponent } from '../../components/reserve-button/reserve-button.component';

@Component({
  selector: 'app-stays',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ReserveButtonComponent],
  templateUrl: './stays.component.html',
  styleUrl: './stays.component.scss'
})
export class StaysComponent {

}
