import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuOptionsComponent } from '../menu-options/menu-options.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChartPie, faRectangleList, faBook, faLayerGroup, faGraduationCap , faUsers, faGear, faRightFromBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { MenuUserComponent } from '../menu-user/menu-user.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'library-sidebar',
  standalone: true,
  imports: [MenuOptionsComponent, RouterModule, FontAwesomeModule, CommonModule, MenuUserComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {



  public status:boolean = false;

  public iconSideBar = faBars;

  public menuSiderbar = [
    { label:'Dashboard', icon: faChartPie, url: './dashboard' },
    { label:'Préstamos', icon: faRectangleList, url: './books-loan-page' },
    { label:'Libros', icon: faBook, url: './books-page' },
    { label:'Autores', icon: faLayerGroup, url: './autor-page' },
    { label:'Estudiantes', icon: faGraduationCap, url: './students-page' },
    { label:'Usuarios', icon: faUsers, url: './users-page' },
  ]

  isVisible():void{
    this.status = !this.status;
  }
}
