import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // TODO: Hier die Backend-URL eintragen
  private apiUrl = '/api/contact';

  constructor(private http: HttpClient) {}

  sendMessage(payload: ContactPayload): Observable<any> {
    // Beispiel: POST an dein Backend
    return this.http.post(this.apiUrl, payload);
  }
}
