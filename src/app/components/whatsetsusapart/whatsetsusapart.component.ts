import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-whatsetsusapart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './whatsetsusapart.component.html',
  styleUrl: './whatsetsusapart.component.scss'
})
export class WhatSetsUsApartComponent {
  features = [
    {
      icon: '../../../assets/images/Cup_Shoe.png',
      title: 'tailored comfort',
      subtitle: 'Honesty, Always.'
    },
    {
      icon: '../../../assets/images/Flower_hand.png',
      title: 'kindness',
      subtitle: 'Love Lingers In The Little Things.'
    },
    {
      icon: '../../../assets/images/Hand_Mobile.png',
      title: 'care',
      subtitle: 'Real People, Real Connection.'
    },
    {
      icon: '../../../assets/images/Coffee & Cup.png',
      title: 'community',
      subtitle: 'Every Detail, A Devotion.'
    },
    {
      icon: '../../../assets/images/Coffee Image -01.png',
      title: 'hospitality',
      subtitle: 'Need Something Extra?'
    },
    {
      icon: '../../../assets/images/girl reading book.png',
      title: 'authenticity',
      subtitle: 'We Move At Your Rhythm.'
    }
  ];
}
