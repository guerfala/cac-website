import { Component } from '@angular/core';

@Component({
  selector: 'app-liens-page',
  standalone: true,
  template: `
    <div class="page-placeholder">
      <span class="page-badge">Ressources</span>
      <h1 class="page-title">Liens</h1>
      <p class="page-subtitle">
        Liens utiles vers les fédérations, ligues, comités
        et partenaires du club.
      </p>
      <div class="page-divider"></div>
      <span class="page-coming">Contenu à venir</span>
    </div>
  `,
})
export class LiensPage {}
