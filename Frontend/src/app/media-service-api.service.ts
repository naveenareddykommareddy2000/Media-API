import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaServiceAPIService {

  private apiUrl = 'http://localhost:5130/api/media';

  constructor(private http: HttpClient) {}

  getMediaData() {
    return this.http.get(this.apiUrl);
  }
}
