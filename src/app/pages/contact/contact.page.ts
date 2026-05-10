import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.page.html',
  styleUrl: './contact.page.scss',
})
export class ContactPage {
  form = {
    nom: '',
    prenom: '',
    email: '',
    objet: '',
    message: '',
  };

  loading = false;
  success = false;
  error = '';

  constructor(private http: HttpClient) {}

  send(): void {
    this.error = '';
    this.success = false;

    if (!this.form.nom || !this.form.prenom || !this.form.email || !this.form.message) {
      this.error = 'Veuillez remplir tous les champs obligatoires.';
      return;
    }

    this.loading = true;

    this.http.post('http://localhost:8080/api/contact', this.form).subscribe({
      next: () => {
        this.loading = false;
        this.success = true;
        this.form = { nom: '', prenom: '', email: '', objet: '', message: '' };
      },
      error: (err) => {
        this.loading = false;
        this.error = err.error?.message || "Erreur lors de l'envoi. Veuillez réessayer.";
      },
    });
  }
}
