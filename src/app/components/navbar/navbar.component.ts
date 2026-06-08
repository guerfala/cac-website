import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface NavChild {
  label: string;
  route?: string;
  externalUrl?: string;
}

interface NavLink {
  label: string;
  route?: string;
  children?: NavChild[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled = false;
  isMobileMenuOpen = false;
  openDropdown: string | null = null;

  boutiqueUrl = 'https://springart.cc/en/collections/courbevoie-athletisme';

  navLinks: NavLink[] = [
    { label: 'Accueil', route: '/' },
    {
      label: 'Présentation',
      children: [
        { label: 'Dirigeants', route: '/presentation/dirigeants' },
        { label: 'Entraîneurs', route: '/presentation/entraineurs' },
      ],
    },
    {
      label: 'Infos pratiques',
      children: [
        { label: 'Actualités', route: '/infos-pratiques/actualites' },
        { label: 'Horaires et tarifs', route: '/infos-pratiques/horaires-tarifs' },
        { label: 'Congés scolaires', route: '/infos-pratiques/conges-scolaires' },
        { label: 'Partenaires', route: '/infos-pratiques/partenaires' },
      ],
    },
    {
      label: 'Résultats & Médias',
      children: [
        {
          label: 'Résultats',
          externalUrl: 'https://www.athle.fr/bases/liste.aspx?frmpostback=true&frmbase=resultats&frmmode=2&frmespace=0&frmtype1=&frmtype2=&frmtype3=&frmtype4=&frmniveau=&frmniveaulab=&frmligue=&frmdepartement=&frmeprrch=&frmclub=092017&frmdate_j1=&frmdate_m1=&frmdate_a1=&frmdate_j2=&frmdate_m2=&frmdate_a2=',
        },
        { label: 'Albums photos', route: '/resultats-medias/albums-photos' },
      ],
    },
    {
      label: 'Liens',
      children: [
        { label: 'Comité des Hauts-de-Seine d\'Athlétisme', externalUrl: 'https://cda92.athle.fr/accueil.aspx' },
        { label: 'Ligue d\'Île-de-France d\'athlétisme', externalUrl: 'https://www.lifa-athle.fr/' },
        { label: 'Fédération Française d\'Athlétisme', externalUrl: 'https://www.athle.fr' },
      ],
    },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.nav-item--dropdown')) {
      this.openDropdown = null;
    }
  }

  toggleDropdown(label: string, event: Event): void {
    event.stopPropagation();
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeAll(): void {
    this.openDropdown = null;
    this.isMobileMenuOpen = false;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (!this.isMobileMenuOpen) this.openDropdown = null;
  }
}
