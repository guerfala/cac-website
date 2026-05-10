import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { PresentationSectionComponent } from '../../components/presentation-section/presentation-section.component';
import { InfosSectionComponent } from '../../components/infos-section/infos-section.component';
import { ResultatsSectionComponent } from '../../components/resultats-section/resultats-section.component';
import { LiensSectionComponent } from '../../components/liens-section/liens-section.component';
import { PartenairesSectionComponent } from '../../components/partenaires-section/partenaires-section.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    HeroComponent,
    PresentationSectionComponent,
    InfosSectionComponent,
    ResultatsSectionComponent,
    PartenairesSectionComponent,
    LiensSectionComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-presentation-section></app-presentation-section>
    <app-infos-section></app-infos-section>
    <app-resultats-section></app-resultats-section>
    <app-partenaires-section></app-partenaires-section>
    <app-liens-section></app-liens-section>
  `,
})
export class AccueilPage {}
