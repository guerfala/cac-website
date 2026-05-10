import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-conges-scolaires',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './conges-scolaires.page.html',
  styleUrl: './conges-scolaires.page.scss',
})
export class CongesScolairesPage implements OnInit {
  conges: any[] = [];
  saison = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.getConges().subscribe(data => {
      this.conges = data;
      if (data.length > 0 && data[0].saison) {
        this.saison = data[0].saison;
      }
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '—';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
