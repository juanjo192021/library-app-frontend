import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-library-page',
  standalone: true,
  imports: [
    RouterModule,NavbarComponent,SidebarComponent,CommonModule,HttpClientModule
  ],
  templateUrl: './library-page.component.html',
  styleUrl: './library-page.component.css'
})
export default class LibraryPageComponent {
  @Input()
  public status:boolean= false;
}
