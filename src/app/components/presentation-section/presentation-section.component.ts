import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-presentation-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './presentation-section.component.html',
  styleUrl: './presentation-section.component.scss',
})
export class PresentationSectionComponent implements OnInit {
  stats = [
    { number: '—', label: 'Dirigeants' },
    { number: '—', label: 'Entraîneurs' },
    { number: '—', label: 'Actualités' },
    { number: '—', label: 'Albums' },
  ];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getStats().subscribe((data: any) => {
      this.stats = [
        { number: data.dirigeants.toString(), label: 'Dirigeants' },
        { number: data.entraineurs.toString(), label: 'Entraîneurs' },
        { number: data.actualites.toString(), label: 'Actualités' },
        { number: data.photos.toString(), label: 'Photos' },
      ];
    });
  }
}
