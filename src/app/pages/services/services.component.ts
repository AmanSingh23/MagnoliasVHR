import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ReserveButtonComponent } from '../../components/reserve-button/reserve-button.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ReserveButtonComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

}
