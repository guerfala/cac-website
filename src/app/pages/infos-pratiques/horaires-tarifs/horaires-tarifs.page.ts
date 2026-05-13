import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-horaires-tarifs',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './horaires-tarifs.page.html',
  styleUrl: './horaires-tarifs.page.scss',
})
export class HorairesTarifsPage implements OnInit {
  saison = '';
  categories: any[] = [];
  tarifs: any[] = [];
  tarifsNote = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getSetting('saison').subscribe({ next: (s: any) => this.saison = s.valeur, error: () => this.saison = '25/26' });
    this.api.getSetting('tarifs_note').subscribe({ next: (s: any) => this.tarifsNote = s.valeur, error: () => {} });
    this.api.getCategories().subscribe(d => this.categories = d);
    this.api.getTarifs().subscribe(d => this.tarifs = d);
  }

  getHoraires(h: string): string[] {
    return h ? h.split('\n').filter((l: string) => l.trim()) : [];
  }
}
