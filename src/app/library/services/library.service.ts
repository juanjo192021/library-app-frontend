import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Autor, Genero } from '../interfaces';
import { Observable, catchError, map, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  private readonly baseUrl: string = environment.baseUrl;

  private httpClient = inject(HttpClient);

  private _currentAutor = signal<Autor[] | null>(null);
  //! Al mundo exterior

  public currentAutor = computed(() => this._currentAutor());

  getAutores(): Observable<Autor[]> {
    const url: string = `${this.baseUrl}/autores/getAll`;
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<Autor[]>(url, { headers }).pipe(
      map((autor) => {
        this._currentAutor.set(autor);
        return autor;
      }),
      catchError((error) =>
        throwError(() => {
          console.log(error.error);
          return of(null);
        })
      )
    );
  }

  getLiteraryGenres(): Observable<Genero[]> {
    const url: string = `${this.baseUrl}/generos/getAll`;
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<Genero[]>(url, { headers }).pipe(
      map((genero) => {
        return genero;
      }),
      catchError((error) =>
        throwError(() => {
          console.log(error.error);
          return of(null);
        })
      )
    );
  }
}
