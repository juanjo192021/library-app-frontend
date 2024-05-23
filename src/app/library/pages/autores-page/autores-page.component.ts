import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faPenToSquare,
  faPlus,
  faSort,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { Autor, Genero } from '../../interfaces';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { LibraryService } from '../../services/library.service';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autores-page',
  standalone: true,
  imports: [FontAwesomeModule, SortByPipe, CommonModule,ReactiveFormsModule],
  templateUrl: './autores-page.component.html',
  styleUrl: './autores-page.component.css',
})
export default class AutoresPageComponent implements OnInit {
  public iconSort = faSort;

  public iconAddItem = faPlus;
  public iconEditItem = faPenToSquare;
  public iconDeleteItem = faTrashCan;

  public iconBefore = faChevronLeft;
  public iconAfter = faChevronRight;

  public orderBy?: keyof Autor;

  public order: boolean = true;

  public autores: Autor[] = [];
  public generos: Genero[] = [];

  public title:string = '';

  private libraryService = inject(LibraryService);
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    apellidoPaterno: ['', [Validators.required]],
    apellidoMaterno: ['', [Validators.required]],
    generos:['', Validators.required],
  });

  // get generos() {
  //   return this.myForm.get('generos') as FormArray;
  // }

  ngOnInit(): void {
    this.libraryService
      .getAutores()
      .subscribe((autores) => (this.autores = autores));

    this.libraryService
      .getLiteraryGenres()
      .subscribe((generos) => (this.generos = generos));

      // this.libraryService
      // .getLiteraryGenres()
      // .subscribe((generos) => {
      //   generos.forEach(element => {
      //     this.generos.push(this.fb.control(element.nombre, Validators.required));
      //   });
      // });
  }

  changeOrder(value: keyof Autor) {
    this.orderBy === value
      ? (this.order = !this.order)
      : ((this.orderBy = value), (this.order = true));
  }

  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    //console.log(Number(this.myForm.controls['generos'].value));
    this.myForm.reset();
  }

  viewModalCreateUpdate(resp: Autor | null) {
    if(resp === null) {
      this.myForm.reset({generos: "0"});
      this.title = 'Crear';
      return
    }
    const autor = {
      nombre: resp?.nombre,
      apellidoPaterno: resp?.apellidoPaterno,
      apellidoMaterno: resp?.apellidoMaterno,
      generos: resp?.genero.id,
    }

    console.log(autor);
    this.myForm.reset(autor);
    this.title = 'Editar';
    //this.myForm.controls['nombre'].setValue = "aax";
  }
}
