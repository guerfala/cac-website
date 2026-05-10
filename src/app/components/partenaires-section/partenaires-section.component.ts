import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-partenaires-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './partenaires-section.component.html',
  styleUrl: './partenaires-section.component.scss',
})
export class PartenairesSectionComponent {
  partenaires = [
    { nom: 'Mairie', logo: 'assets/partenaires/mairie.png' },
    { nom: 'Conseil Départemental', logo: 'assets/partenaires/conseil-departemental.png' },
    { nom: 'Région', logo: 'assets/partenaires/region.png' },
    { nom: 'FFA', logo: 'assets/partenaires/ffa.png' },
    { nom: 'Sponsor 1', logo: 'assets/partenaires/sponsor1.png' },
    { nom: 'Sponsor 2', logo: 'assets/partenaires/sponsor2.png' },
    { nom: 'Sponsor 3', logo: 'assets/partenaires/sponsor3.png' },
    { nom: 'Sponsor 4', logo: 'assets/partenaires/sponsor4.png' },
  ];
}
