import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './actualites.page.html',
  styleUrl: './actualites.page.scss',
})
export class ActualitesPage implements OnInit {
  actualites: any[] = [];

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getActualites().subscribe(data => this.actualites = data);
  }
}
