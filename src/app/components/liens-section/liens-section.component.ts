import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-liens-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './liens-section.component.html',
  styleUrl: './liens-section.component.scss',
})
export class LiensSectionComponent {
  liens = [
    { num: '01', name: "Comité des Hauts-de-Seine d'Athlétisme", desc: 'CDA 92 — Résultats et calendrier', url: 'https://cda92.athle.fr/accueil.aspx' },
    { num: '02', name: "Ligue d'Île-de-France d'athlétisme", desc: 'LIFA — Ligue régionale', url: 'https://lifa.athle.fr/accueil.aspx' },
    { num: '03', name: "Fédération Française d'Athlétisme", desc: 'Site officiel de la FFA', url: 'https://www.athle.fr' },
  ];
}
