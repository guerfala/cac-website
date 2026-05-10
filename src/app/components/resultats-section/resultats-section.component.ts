import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../../directives/reveal.directive';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-resultats-section',
  standalone: true,
  imports: [CommonModule, RouterLink, RevealDirective],
  templateUrl: './resultats-section.component.html',
  styleUrl: './resultats-section.component.scss',
})
export class ResultatsSectionComponent implements OnInit {
  resultatsUrl = 'https://www.athle.fr/bases/liste.aspx?frmpostback=true&frmbase=resultats&frmmode=2&frmespace=0&frmtype1=&frmtype2=&frmtype3=&frmtype4=&frmniveau=&frmniveaulab=&frmligue=&frmdepartement=&frmeprrch=&frmclub=092017&frmdate_j1=&frmdate_m1=&frmdate_a1=&frmdate_j2=&frmdate_m2=&frmdate_a2=';

  highlights: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getActualites().subscribe(data => {
      this.highlights = data.slice(0, 3);
    });
  }
}
