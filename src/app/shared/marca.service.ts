import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Marca } from './marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:5000/api/Marca';
  formData: Marca = new Marca();
  list: Marca[];

  postMarca() {
    return this.http.post(this.baseURL, this.formData);
  }

  putMarca() {
    return this.http.put(this.baseURL + '/' + this.formData.marcaId , this.formData);
  }

  deleteMarca(marcaId: number) {
    return this.http.delete(this.baseURL + '/'+marcaId)
   }

  refreshList() {
    this.http.get(this.baseURL)
        .toPromise()
        .then(res => this.list = res as Marca[]);
  }

}
