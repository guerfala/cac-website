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
    { num: '02', name: 'Calendrier courses hors stade 92', desc: 'Département des Hauts-de-Seine', url: 'https://www.hauts-de-seine.fr/sports-loisirs/sports/les-manifestations-2019/' },
    { num: '03', name: 'Comité régional courses hors stade IDF', desc: 'Courses hors stade Île-de-France', url: 'http://ww38.crchsidf.org' },
    { num: '04', name: "Ligue d'Île-de-France d'athlétisme", desc: 'LIFA — Ligue régionale', url: 'https://lifa.athle.fr/accueil.aspx' },
    { num: '05', name: "Fédération Française d'Athlétisme", desc: 'Site officiel de la FFA', url: 'https://www.athle.fr' },
  ];
}
