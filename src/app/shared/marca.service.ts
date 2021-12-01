import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from './marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:5000/api/Marca';
  formData:Marca = new Marca();

  postMarca() {
    return this.http.post(this.baseURL, this.formData);
  }


}
