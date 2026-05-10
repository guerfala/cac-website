import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-infos-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './infos-section.component.html',
  styleUrl: './infos-section.component.scss',
})
export class InfosSectionComponent {
  cards = [
    {
      icon: 'news',
      title: 'Actualités',
      desc: 'Restez informés des dernières nouvelles du club, événements à venir et résultats récents.',
      route: '/infos-pratiques/actualites',
    },
    {
      icon: 'clock',
      title: 'Horaires & Tarifs',
      desc: 'Consultez les horaires d\'entraînement par catégorie et les tarifs de cotisation.',
      route: '/infos-pratiques/horaires-tarifs',
    },
    {
      icon: 'calendar',
      title: 'Congés Scolaires',
      desc: 'Calendrier des vacances scolaires et périodes de fermeture du club.',
      route: '/infos-pratiques/conges-scolaires',
    },
  ];
}
