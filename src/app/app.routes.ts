import { Routes } from '@angular/router';
import { AccueilPage } from './pages/accueil/accueil.page';
import { DirigeantsPage } from './pages/presentation/dirigeants/dirigeants.page';
import { EntraineursPage } from './pages/presentation/entraineurs/entraineurs.page';
import { ActualitesPage } from './pages/infos-pratiques/actualites/actualites.page';
import { ActualiteDetailPage } from './pages/infos-pratiques/actualite-detail/actualite-detail.page';
import { HorairesTarifsPage } from './pages/infos-pratiques/horaires-tarifs/horaires-tarifs.page';
import { CongesScolairesPage } from './pages/infos-pratiques/conges-scolaires/conges-scolaires.page';
import { PartenairesPage } from './pages/infos-pratiques/partenaires/partenaires.page';
import { AlbumsPhotosPage } from './pages/resultats-medias/albums-photos/albums-photos.page';
import { ContactPage } from './pages/contact/contact.page';

export const routes: Routes = [
  { path: '', component: AccueilPage },
  { path: 'presentation/dirigeants', component: DirigeantsPage },
  { path: 'presentation/entraineurs', component: EntraineursPage },
  { path: 'infos-pratiques/actualites', component: ActualitesPage },
  { path: 'infos-pratiques/actualites/:id', component: ActualiteDetailPage },
  { path: 'infos-pratiques/horaires-tarifs', component: HorairesTarifsPage },
  { path: 'infos-pratiques/conges-scolaires', component: CongesScolairesPage },
  { path: 'infos-pratiques/partenaires', component: PartenairesPage },
  { path: 'resultats-medias/albums-photos', component: AlbumsPhotosPage },
  { path: 'contact', component: ContactPage },
  { path: '**', redirectTo: '' },
];
