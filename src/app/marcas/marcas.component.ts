import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../shared/marca.service';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  public marcas: any;
  constructor(private http: HttpClient, private service: MarcaService) { }

  ngOnInit(): void {
    this.getMarcas();
  }

  public getMarcas(): void {
    this.http.get('http://localhost:5000/api/Marca').subscribe(
      response => {
        this.marcas = response;
      },
      error => console.log('errorr...', error)
    );
  }

  public deletar(id:number){

  }



}
