import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { ReserveButtonComponent } from '../../components/reserve-button/reserve-button.component';

@Component({
  selector: 'app-nurturing',
  standalone: true,
  imports: [RouterLink, HeaderComponent, ReserveButtonComponent],
  templateUrl: './nurturing.component.html',
  styleUrl: './nurturing.component.scss'
})
export class NurturingComponent {

}
