import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Marca } from 'src/app/shared/marca.model';
import { MarcaService } from 'src/app/shared/marca.service';

@Component({
  selector: 'app-marcas-form',
  templateUrl: './marcas-form.component.html',
  styles: [
  ]
})
export class MarcasFormComponent implements OnInit {

  constructor(
    public service: MarcaService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    if (this.service.formData.marcaId == 0) {
      this.insertRecord(form);
    } else {
      this.updateRecord(form);
    }


  }

  insertRecord(form: NgForm) {
    this.service.postMarca().subscribe(
      response => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success("Marca cadastrada com succeso.", 'ForTrek');
      },
      err => {
        console.error(err)
      }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putMarca().subscribe(
      response => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info("Marca atualizada com succeso.", 'ForTrek');
      },
      err => {
        console.error(err)
      }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new Marca();
  }

}
