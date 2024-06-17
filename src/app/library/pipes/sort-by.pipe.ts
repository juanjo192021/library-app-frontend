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
          ? autores.sort((a, b) => (a.nombre.toLocaleUpperCase() > b.nombre.toLocaleUpperCase() ? 1 : -1))
          : autores.sort((a, b) => (a.nombre.toLocaleUpperCase() < b.nombre.toLocaleUpperCase() ? 1 : -1));
      case 'apellidoPaterno':
        return order
          ? autores.sort((a, b) => (a.apellidoPaterno.toLocaleUpperCase() > b.apellidoPaterno.toLocaleUpperCase() ? 1 : -1))
          : autores.sort((a, b) => (a.apellidoPaterno.toLocaleUpperCase() < b.apellidoPaterno.toLocaleUpperCase() ? 1 : -1));
      case 'apellidoMaterno':
        return order
          ? autores.sort((a, b) => (a.apellidoMaterno.toLocaleUpperCase() > b.apellidoMaterno.toLocaleUpperCase() ? 1 : -1))
          : autores.sort((a, b) => (a.apellidoMaterno.toLocaleUpperCase() < b.apellidoMaterno.toLocaleUpperCase() ? 1 : -1));
      // case 'generos':
      //   return order
      //     ? autores.sort((a, b) => (a.generos.nombre.toLocaleUpperCase() > b.generos.nombre.toLocaleUpperCase() ? 1 : -1))
      //     : autores.sort((a, b) => (a.generos.nombre.toLocaleUpperCase() < b.generos.nombre.toLocaleUpperCase() ? 1 : -1));
      default:
        return autores;
    }
  }
}
