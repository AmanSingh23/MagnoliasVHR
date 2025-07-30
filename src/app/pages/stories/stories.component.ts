import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { TrustBatchesComponent } from '../../components/trust-batches/trust-batches.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { StorymapComponent } from '../../components/storymap/storymap.component';
import { ReserveButtonComponent } from '../../components/reserve-button/reserve-button.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-stories',
  standalone: true,
  imports: [RouterLink, HeaderComponent, BannerComponent, TrustBatchesComponent, TestimonialsComponent, StorymapComponent, FooterComponent, ReserveButtonComponent],
  templateUrl: './stories.component.html',
  styleUrl: './stories.component.scss'
})
export class StoriesComponent {
  @Input() badges: Array<{ icon: string, text: string }> = [];
}
