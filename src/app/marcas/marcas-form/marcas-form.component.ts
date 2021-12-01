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

  public onSubmit(form:NgForm) {
    this.service.postMarca().subscribe(
      response => {
        this.resetForm(form);
        this.toastr.success("Marca cadastrada com succeso.", 'Cadastro de marcas')//125
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
