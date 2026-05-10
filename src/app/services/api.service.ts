import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'http://localhost:8080/api';
  private uploads = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // ─── Dirigeants ───
  getDirigeants(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/dirigeants`);
  }

  // ─── Entraineurs ───
  getEntraineurs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/entraineurs`);
  }

  // ─── Actualités ───
  getActualites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/actualites`);
  }

  // ─── Congés Scolaires ───
  getConges(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/conges`);
  }

  // ─── Albums ───
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(`${this.base}/albums`);
  }

  getAlbum(id: number): Observable<any> {
    return this.http.get<any>(`${this.base}/albums/${id}`);
  }

  // ─── Dashboard Stats ───
  getStats(): Observable<any> {
    return this.http.get<any>(`${this.base}/dashboard/stats`);
  }

  // ─── Image URL helper ───
  img(path: string | null): string {
    if (!path) return '';
    return path.startsWith('http') ? path : `${this.uploads}${path}`;
  }
}
