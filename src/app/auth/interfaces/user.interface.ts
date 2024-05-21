export interface User {
  id:               number;
  username:         string;
  password:         string;
  nombre:           string;
  apellido_paterno: string;
  apellido_materno: string;
  numero_documento: string;
  correo:           string;
  rol:              Rol;
}

export interface Rol {
  id:     number;
  nombre: string;
}
