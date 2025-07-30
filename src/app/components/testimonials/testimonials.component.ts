import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  // Testimonial data
  testimonials = [
    {
      quote: "Thoughtfully equipped, warmly attended to - we truly felt at home at MagnoliasVHR.",
      attribution: "— Denis, Russia"
    },
    {
      quote: "Thoughtful, prompt, and always in touch — we felt truly cared for. The apartment was spotless, spacious, and perfect for our big family, with everything we needed and a stunning view from the balcony. We can’t wait to come back!",
      attribution: "— Sarah, UK"
    },
    // {
    //   quote: "A perfect blend of luxury and comfort in the heart of Dubai.",
    //   attribution: "— Ahmed, UAE"
    // },
    // {
    //   quote: "Exceptional service and beautiful accommodations that exceeded our expectations.",
    //   attribution: "— Maria, Spain"
    // },
    // {
    //   quote: "The perfect home away from home with every amenity we could wish for.",
    //   attribution: "— John, USA"
    // }
  ];

  currentTestimonialIndex = 0;

  previousTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex > 0 
      ? this.currentTestimonialIndex - 1 
      : this.testimonials.length - 1;
  }

  nextTestimonial() {
    this.currentTestimonialIndex = this.currentTestimonialIndex < this.testimonials.length - 1 
      ? this.currentTestimonialIndex + 1 
      : 0;
  }

  goToTestimonial(index: number) {
    this.currentTestimonialIndex = index;
  }

  getCurrentTestimonial() {
    return this.testimonials[this.currentTestimonialIndex];
  }

  getTestimonialNumber() {
    return String(this.currentTestimonialIndex + 1).padStart(2, '0') + '/';
  }
}
