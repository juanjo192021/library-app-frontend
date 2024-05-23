import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'library-shared-menu-user',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
  templateUrl: './menu-user.component.html',
  styleUrl: './menu-user.component.css'
})
export class MenuUserComponent implements OnInit {
  public username!:string;
  ngOnInit(): void {
    this.username= localStorage.getItem('username')!;
  }

  @Input()
  public status:boolean = false;

  public optionsUser = [
    { label:'Configuración', icon: faGear, url: '/auth/login' },
    { label:'Salir', icon: faRightFromBracket, url: '/auth/login' },
  ]

  private authService = inject(AuthService);
  //public user = computed(()=> this.authService.currentUser());

  // get user()
  //   return this.authService.currentUser();
  // }

  onLogout(){
    this.authService.logout();
  }
}
