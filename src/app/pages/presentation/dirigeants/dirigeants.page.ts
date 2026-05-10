import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-dirigeants-page',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './dirigeants.page.html',
  styleUrl: './dirigeants.page.scss',
})
export class DirigeantsPage implements OnInit {
  dirigeants: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getDirigeants().subscribe(data => this.dirigeants = data);
  }

  getInitials(nom: string): string {
    return nom.split(' ').map((n) => n[0]).join('').toUpperCase();
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
