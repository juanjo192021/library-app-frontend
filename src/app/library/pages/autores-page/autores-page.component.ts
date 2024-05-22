import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight, faPenToSquare, faPlus, faSort, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Autor } from '../../interfaces';
import { SortByPipe } from '../../pipes/sort-by.pipe';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-autores-page',
  standalone: true,
  imports: [FontAwesomeModule, SortByPipe],
  templateUrl: './autores-page.component.html',
  styleUrl: './autores-page.component.css'
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

  private libraryService = inject(LibraryService);

  ngOnInit(): void {
    this.libraryService.getAutores()
    .subscribe( autores => this.autores = autores );
  }

  changeOrder(value: keyof Autor) {
    this.orderBy === value
      ? (this.order = !this.order)
      : ((this.orderBy = value), (this.order = true));
  }
}
