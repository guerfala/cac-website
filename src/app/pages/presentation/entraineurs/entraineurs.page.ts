import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-entraineurs-page',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './entraineurs.page.html',
  styleUrl: './entraineurs.page.scss',
})
export class EntraineursPage implements OnInit {
  entraineurs: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getEntraineurs().subscribe(data => this.entraineurs = data);
  }

  getInitials(nom: string): string {
    return nom.split(' ').map((n) => n[0]).join('').toUpperCase();
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
