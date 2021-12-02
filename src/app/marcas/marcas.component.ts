import { Marca } from './../shared/marca.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../shared/marca.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {


  constructor(private http: HttpClient, public service: MarcaService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  edit(marca:Marca) {
      this.service.formData = Object.assign({}, marca);
  }

  remove(marca: Marca) {
    if (confirm(`Clique em "ok" para confirmar a exclusão da marca "${marca.nome}".`)) {
          this.service.deleteMarca(marca.marcaId).subscribe(
      respnse => {
        this.service.refreshList();
        this.toastr.info('Marca deletada com sucesso.', 'ForTrek')

      },
      err => {
        this.toastr.error(err, 'ForTrek')
      }

    );
    }

  }

}
