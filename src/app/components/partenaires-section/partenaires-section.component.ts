import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-partenaires-section',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './partenaires-section.component.html',
  styleUrl: './partenaires-section.component.scss',
})
export class PartenairesSectionComponent implements OnInit {
  partenaires: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getPartenaires().subscribe(data => this.partenaires = data);
  }
}
