import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-actualite-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- HERO -->
    <section class="page-hero" *ngIf="actu">
      <div class="page-hero-bg" [style.backgroundImage]="'linear-gradient(180deg, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.85) 100%), url(' + api.img(actu.image) + ')'"></div>
      <div class="page-hero-content">
        <span class="page-hero-label">{{ actu.tag }}</span>
        <h1 class="page-hero-title">{{ actu.titre }}</h1>
        <span class="page-hero-date">{{ formatDate(actu.date) }}</span>
      </div>
    </section>

    <!-- CONTENU -->
    <section class="article-section" *ngIf="actu">
      <div class="container">
        <a routerLink="/infos-pratiques/actualites" class="back-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          Retour aux actualités
        </a>

        <div class="article-content">
          <p class="article-extrait" *ngIf="actu.extrait">{{ actu.extrait }}</p>
          <div class="article-body" *ngIf="actu.contenu">
            <p *ngFor="let paragraph of getContentParagraphs()">{{ paragraph }}</p>
          </div>
          <p class="article-body" *ngIf="!actu.contenu && !actu.extrait">
            Aucun contenu disponible pour cette actualité.
          </p>
        </div>
      </div>
    </section>

    <!-- LOADING -->
    <div class="loading" *ngIf="!actu">
      <p>Chargement...</p>
    </div>
  `,
  styles: [`
    .page-hero {
      position: relative; height: 50vh; min-height: 400px; margin-top: -80px;
      display: flex; align-items: center; justify-content: center; overflow: hidden;
    }
    .page-hero-bg {
      position: absolute; inset: 0; background-size: cover; background-position: center;
    }
    .page-hero-content {
      position: relative; z-index: 2; text-align: center; padding: 100px 24px 40px;
    }
    .page-hero-label {
      display: inline-block; font-size: 11px; font-weight: 600; letter-spacing: 5px;
      text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
      background: rgba(0,0,0,0.4); padding: 6px 16px; border-radius: 20px;
    }
    .page-hero-title {
      font-family: 'Bebas Neue', sans-serif; font-size: clamp(36px, 6vw, 72px);
      letter-spacing: 3px; line-height: 1; color: var(--white); max-width: 800px; margin: 0 auto;
    }
    .page-hero-date {
      display: block; margin-top: 16px; font-size: 14px; color: var(--gray-300);
    }

    .article-section {
      padding: 60px 48px 120px; background: var(--black);
      border-top: 1px solid rgba(239,176,31,0.08);
    }
    .container { max-width: 800px; margin: 0 auto; }

    .back-link {
      display: inline-flex; align-items: center; gap: 8px;
      text-decoration: none; color: var(--gold); font-size: 13px;
      font-weight: 500; letter-spacing: 1px; margin-bottom: 40px;
      svg { width: 16px; height: 16px; }
      &:hover { text-decoration: underline; }
    }

    .article-extrait {
      font-size: 18px; font-weight: 400; line-height: 1.8;
      color: var(--gray-200); margin-bottom: 32px;
      padding-bottom: 32px; border-bottom: 1px solid rgba(239,176,31,0.1);
    }

    .article-body p {
      font-size: 16px; line-height: 1.9; color: var(--gray-300); margin-bottom: 20px;
    }

    .loading {
      min-height: 60vh; display: flex; align-items: center; justify-content: center;
      p { color: var(--gray-400); }
    }
  `],
})
export class ActualiteDetailPage implements OnInit {
  actu: any = null;

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.api.getActualites().subscribe(data => {
      this.actu = data.find((a: any) => a.id === id);
    });
  }

  formatDate(dateStr: string): string {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  getContentParagraphs(): string[] {
    if (!this.actu?.contenu) return [];
    return this.actu.contenu.split('\n').filter((p: string) => p.trim());
  }
}
