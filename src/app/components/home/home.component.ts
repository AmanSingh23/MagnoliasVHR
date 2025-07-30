import { Component } from '@angular/core';
import { BannerComponent } from "../banner/banner.component";
import { HeaderComponent } from "../header/header.component";
import { HeroComponent } from "../hero/hero.component";
import { TrustBatchesComponent } from '../trust-batches/trust-batches.component';
import { IntroComponent } from '../intro/intro.component';
import { WhatSetsUsApartComponent } from "../whatsetsusapart/whatsetsusapart.component";
import { PeoplebehindComponent } from "../peoplebehind/peoplebehind.component";
import { StorymapComponent } from "../storymap/storymap.component";
import { FooterComponent } from "../footer/footer.component";
import { ReserveButtonComponent } from "../reserve-button/reserve-button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent, HeaderComponent, HeroComponent, FooterComponent, TrustBatchesComponent, IntroComponent, WhatSetsUsApartComponent, PeoplebehindComponent, StorymapComponent, ReserveButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
