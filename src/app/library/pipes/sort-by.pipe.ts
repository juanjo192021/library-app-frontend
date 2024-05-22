import { Pipe, PipeTransform } from '@angular/core';
import { Autor, Genero } from '../interfaces';

@Pipe({
  name: 'sortBy',
  standalone: true
})
export class SortByPipe implements PipeTransform {
  transform(
    autores: Autor[],
    sortBy?: keyof Autor | '',
    order?: boolean
  ): Autor[] {
    switch (sortBy) {
      case 'nombre':
        return order
          ? autores.sort((a, b) => (a.nombre > b.nombre ? 1 : -1))
          : autores.sort((a, b) => (a.nombre < b.nombre ? 1 : -1));
      case 'apellidoPaterno':
        return order
          ? autores.sort((a, b) => (a.apellidoPaterno > b.apellidoPaterno ? 1 : -1))
          : autores.sort((a, b) => (a.apellidoPaterno < b.apellidoPaterno ? 1 : -1));
      case 'apellidoMaterno':
        return order
          ? autores.sort((a, b) => (a.apellidoMaterno > b.apellidoMaterno ? 1 : -1))
          : autores.sort((a, b) => (a.apellidoMaterno < b.apellidoMaterno ? 1 : -1));
      case 'genero':
        return order
          ? autores.sort((a, b) => (a.genero.nombre > b.genero.nombre ? 1 : -1))
          : autores.sort((a, b) => (a.genero.nombre < b.genero.nombre ? 1 : -1));
      default:
        return autores;
    }
  }
}
