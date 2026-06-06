import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-partenaires-page',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  template: `
    <section class="partenaires-section">
      <div class="container">
        <div class="section-header" appReveal>
          <span class="section-label">Ils nous soutiennent</span>
          <h2 class="section-title">Merci à nos partenaires</h2>
          <p class="section-desc">
            Le Club Athlétisme Courbevoie remercie chaleureusement ses partenaires
            pour leur soutien tout au long de la saison.
          </p>
        </div>

        <div class="partenaires-grid">
          <a *ngFor="let p of partenaires; let i = index"
             class="partenaire-card"
             appReveal [revealDelay]="i * 80"
             [href]="p.url || '#'"
             [target]="p.url ? '_blank' : '_self'"
             rel="noopener noreferrer">
            <div class="partenaire-logo">
              <img [src]="api.img(p.logo)" [alt]="p.nom" />
            </div>
            <span class="partenaire-name">{{ p.nom }}</span>
          </a>
        </div>

        <p *ngIf="partenaires.length === 0" style="text-align:center;color:var(--gray-400);padding:60px;">
          Aucun partenaire pour le moment.
        </p>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative; height: 45vh; min-height: 400px; margin-top: -80px;
      display: flex; align-items: center; justify-content: center; overflow: hidden;
    }
    .page-hero-bg {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.85) 100%),
        url('/hero-entraineurs.jpg') center/cover no-repeat;
    }
    .page-hero-content { position: relative; z-index: 2; text-align: center; padding: 100px 24px 40px; }
    .page-hero-label {
      display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 5px;
      text-transform: uppercase; color: var(--gold); margin-bottom: 20px;
      opacity: 0; animation: fadeUp 0.8s ease 0.2s forwards;
    }
    .page-hero-title {
      font-family: 'Bebas Neue', sans-serif; font-size: clamp(48px, 10vw, 90px);
      letter-spacing: 3px; line-height: 0.95; color: var(--white);
      opacity: 0; animation: fadeUp 0.8s ease 0.4s forwards;
    }

    .partenaires-section { padding: 100px 48px 120px; background: var(--black); border-top: 1px solid rgba(239,176,31,0.08); }
    .container { max-width: 1100px; margin: 0 auto; }
    .section-header { text-align: center; margin-bottom: 64px; }
    .section-header .section-desc { margin: 0 auto; }

    .partenaires-grid {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
    }
    .partenaire-card {
      display: flex; flex-direction: column; align-items: center; gap: 16px;
      padding: 40px 28px; border: 1px solid rgba(239,176,31,0.1);
      border-radius: 10px; background: rgba(255,255,255,0.02);
      text-decoration: none; transition: all 0.3s ease;
      &:hover { border-color: rgba(239,176,31,0.3); background: rgba(239,176,31,0.04); transform: translateY(-4px);
        img { opacity: 1; }
      }
    }
    .partenaire-logo {
      width: 100%; height: 100px; display: flex; align-items: center; justify-content: center;
      img { max-width: 100%; max-height: 100%; object-fit: contain; opacity: 0.7; transition: opacity 0.3s ease; }
    }
    .partenaire-name {
      font-size: 13px; font-weight: 500; letter-spacing: 1px;
      text-transform: uppercase; color: var(--gray-300); text-align: center;
    }

    @media (max-width: 1024px) { .partenaires-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) {
      .partenaires-section { padding: 80px 24px; }
      .partenaires-grid { grid-template-columns: repeat(2, 1fr); }
    }
  `],
})
export class PartenairesPage implements OnInit {
  partenaires: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getPartenaires().subscribe(data => this.partenaires = data);
  }
}
