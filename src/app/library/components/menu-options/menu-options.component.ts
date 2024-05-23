import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faChartPie,
  faRectangleList,
  faBook,
  faLayerGroup,
  faGraduationCap,
  faUsers,
  faGear,
  faRightFromBracket,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'library-shared-menu',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
  templateUrl: './menu-options.component.html',
  styleUrls: [
    '../../components/sidebar/sidebar.component.css',
    './menu-options.component.css',
  ],
})
export class MenuOptionsComponent {
  public iconSideBar = faBars;
  @Input()
  public status: boolean = false;
  public menuSiderbar = [
    { label: 'Dashboard', icon: faChartPie, url: './dashboard' },
    { label: 'Préstamos', icon: faRectangleList, url: './book-loans' },
    { label: 'Libros', icon: faBook, url: './books' },
    { label: 'Autores', icon: faLayerGroup, url: './autors' },
    { label: 'Estudiantes', icon: faGraduationCap, url: './students' },
    { label: 'Usuarios', icon: faUsers, url: './users' },
  ];

  toRedirect(url:string){
    const response: string = url.replace('./', '');
    localStorage.setItem('path',`/library/${response}`);
  }
}
