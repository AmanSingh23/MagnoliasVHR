import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const wasScrolled = this.isScrolled;
    this.isScrolled = window.scrollY > 50;
    
    // Add/remove body class to prevent content from being hidden behind fixed header
    if (this.isScrolled && !wasScrolled) {
      document.body.classList.add('header-scrolled');
    } else if (!this.isScrolled && wasScrolled) {
      document.body.classList.remove('header-scrolled');
    }
  }

  ngOnInit() {
    // Initial check for scroll position
    this.onWindowScroll();
  }

  ngOnDestroy() {
    // Clean up body class when component is destroyed
    document.body.classList.remove('header-scrolled');
  }
}
