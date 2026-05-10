import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../../directives/reveal.directive';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-albums-photos',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './albums-photos.page.html',
  styleUrl: './albums-photos.page.scss',
})
export class AlbumsPhotosPage implements OnInit {
  albums: any[] = [];
  selectedAlbum: any = null;
  lightboxOpen = false;
  lightboxIndex = 0;

  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.api.getAlbums().subscribe(data => this.albums = data);
  }

  openAlbum(album: any): void {
    this.api.getAlbum(album.id).subscribe(data => {
      this.selectedAlbum = data;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  closeAlbum(): void {
    this.selectedAlbum = null;
  }

  openLightbox(index: number): void {
    this.lightboxIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  prevPhoto(event: Event): void {
    event.stopPropagation();
    if (!this.selectedAlbum) return;
    this.lightboxIndex =
      (this.lightboxIndex - 1 + this.selectedAlbum.photos.length) %
      this.selectedAlbum.photos.length;
  }

  nextPhoto(event: Event): void {
    event.stopPropagation();
    if (!this.selectedAlbum) return;
    this.lightboxIndex =
      (this.lightboxIndex + 1) % this.selectedAlbum.photos.length;
  }

  onKeydown(event: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowLeft') this.prevPhoto(event);
    if (event.key === 'ArrowRight') this.nextPhoto(event);
  }

  onImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
