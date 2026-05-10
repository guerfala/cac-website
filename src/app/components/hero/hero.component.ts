import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  features = [
    { icon: 'club', title: 'Un club pour tous', desc: "De l'école d'athlétisme aux masters" },
    { icon: 'depasser', title: 'Dépassement de soi', desc: 'Se dépasser, progresser et se faire plaisir' },
    { icon: 'equipe', title: "Esprit d'équipe", desc: 'Partage, entraide et convivialité' },
    { icon: 'events', title: "Événements toute l'année", desc: 'Compétitions, meetings et événements club' },
  ];
}
