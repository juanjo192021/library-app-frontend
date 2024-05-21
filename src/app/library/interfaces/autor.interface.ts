import { Genero } from "./genero.interface";

export interface Autor {
  id:              number;
  nombre:          string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  genero:          Genero;
}
