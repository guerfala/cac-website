import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';

interface Categorie {
  nom: string;
  horaires: string[];
}

interface Tarif {
  categorie: string;
  cotisation: string;
  licence: string;
  total: string;
}

@Component({
  selector: 'app-horaires-tarifs',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './horaires-tarifs.page.html',
  styleUrl: './horaires-tarifs.page.scss',
})
export class HorairesTarifsPage {
  categories: Categorie[] = [
    {
      nom: 'Baby Athlé',
      horaires: [
        '4 ans — Mercredi de 13h30 à 14h30 ou Samedi de 9h00 à 10h00 à l\'espace Jean Pierre Rives',
        '5 ans — Mercredi de 14h30 à 16h00 ou Samedi de 10h00 à 11h30 à l\'espace Jean Pierre Rives',
        '6 ans — Mercredi de 16h00 à 17h30 ou Samedi de 11h30 à 13h00 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Éveil Athlé',
      horaires: [
        '7 à 8 ans — Mercredi et/ou Samedi de 13h30 à 15h15 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Poussin',
      horaires: [
        '9 à 10 ans — Mercredi et/ou Samedi de 15h15 à 17h00 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Benjamin',
      horaires: [
        '11 à 12 ans — Mercredi de 17h00 à 18h30 et Samedi de 14h00 à 15h30 à l\'espace Jean Pierre Rives (2 entraînements obligatoires)',
      ],
    },
    {
      nom: 'Minime',
      horaires: [
        '13 à 14 ans — Mardi, Jeudi de 18h00 à 20h00 à l\'espace Jean Pierre Rives (2 entraînements obligatoires)',
      ],
    },
    {
      nom: 'Cadet / Junior / Espoir / Senior / Master',
      horaires: [
        'Sprint — Lundi, Mercredi de 18h30 à 20h30 à l\'espace Jean Pierre Rives',
        'Sport Adapté — Mercredi de 17h00 à 18h00 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Cadet / Junior / Espoir',
      horaires: [
        'Demi-fond 800-1500M — Lundi, Mercredi de 18h30 à 20h30 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Running débutants',
      horaires: [
        'Préparation courses à pied — Mardi et Jeudi de 20h30 à 22h00 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Running confirmés',
      horaires: [
        'Préparation du 10 km au Marathon — Mardi et Jeudi de 19h00 à 20h30 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Entretien athlétique',
      horaires: [
        'Tous publics (Coach Athlé Santé) — Lundi et Mercredi de 20h00 à 21h30 à l\'espace Jean Pierre Rives',
      ],
    },
    {
      nom: 'Marche Nordique',
      horaires: [
        'Dimanche de 9h00 à 11h00',
        'RDV 8h30 devant le stade pour covoiturage ou 9h00 Tour Antenne Relais en forêt de Meudon',
      ],
    },
    {
      nom: 'Libres',
      horaires: [
        'Gratuit — Horaires à consulter à l\'entrée du stade',
      ],
    },
  ];

  tarifs: Tarif[] = [
    { categorie: 'Baby', cotisation: '160 €', licence: '0 €', total: '160 €' },
    { categorie: 'Éveil Athlé / Poussins', cotisation: '160 €', licence: '70 €', total: '230 €' },
    { categorie: 'Benjamins / Minimes', cotisation: '160 €', licence: '70 €', total: '230 €' },
    { categorie: 'Cadets / Juniors / Espoirs / Seniors / Vétérans', cotisation: '160 €', licence: '80 €', total: '240 €' },
    { categorie: 'Running débutant', cotisation: '145 €', licence: '70 €', total: '215 €' },
    { categorie: 'Running confirmés', cotisation: '145 €', licence: '70 €', total: '215 €' },
    { categorie: 'Entretien Athlétique', cotisation: '155 €', licence: '70 €', total: '225 €' },
    { categorie: 'Marche Nordique', cotisation: '155 €', licence: '70 €', total: '225 €' },
  ];
}
