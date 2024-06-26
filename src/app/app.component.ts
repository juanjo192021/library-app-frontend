import { Component, computed, effect, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthStatus } from './auth/interfaces';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth/services/auth.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'library-app';
  private authService =  inject(AuthService);
  private router = inject(Router);

  public finishedAuthCheck= computed<boolean>(() =>{
    if ( this.authService.authStatus() === AuthStatus.checking){
      delay(3000);
      return false;
    }

    return true;
  });

  public authStatusChangedEffect = effect(() =>{

    switch(this.authService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        const redirect = localStorage.getItem('path')!;
        this.router.navigateByUrl(redirect);
        return;
      case AuthStatus.notAuthenticated:
        this.router.navigateByUrl('/auth/login');
        return;
    }

    ;
  })
}
