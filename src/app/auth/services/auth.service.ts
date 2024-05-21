import { Injectable, computed, inject, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthStatus, LoginResponse, User } from '../interfaces';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { CheckTokenResponse } from '../interfaces/check-token-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.baseUrl;

  private httpClient = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  //! Al mundo exterior

  public currentUser = computed(() => this._currentUser());
  public authStatus = computed(() => this._authStatus());

  constructor(){
    this.checkAuthStatus().subscribe();
  }

  private setAuthentication(usuario:User, accessToken:string):boolean{

    this._currentUser.set(usuario);
    this._authStatus.set(AuthStatus.authenticated);
    localStorage.setItem('token', accessToken);
    return true;
  }

  login(correo: string, password: string): Observable<boolean> {
    const url: string = `${this.baseUrl}/auth/login`;

    const body = { correo, password };

    //console.log("En el auth.service.ts: " , body);
    return this.httpClient.post<LoginResponse>(url, body).pipe(
      map(({ usuario, accessToken }) => {
        localStorage.setItem('username',usuario.username);
        return this.setAuthentication(usuario, accessToken)
      }),
      //Todo: Errores ('Falta validación en el backend' cambiar por error.error.message)
      catchError((error) => throwError(() => {
        console.log(error.error)
      }))
    );
  }

  checkAuthStatus():Observable<boolean>{
    const url: string = `${this.baseUrl}/auth/checkToken`;
    const token = localStorage.getItem('token');

    if(!token) {
      this.logout();
      return of(false);
    }

    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`);

    return this.httpClient.get<CheckTokenResponse>(url, {headers})
    .pipe(
      map(({ usuario, accessToken }) => this.setAuthentication(usuario, accessToken) ),
      catchError(()=> {
        this._authStatus.set(AuthStatus.notAuthenticated);
        return of(false);
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this._currentUser.set(null);
    this._authStatus.set(AuthStatus.notAuthenticated);
  }
}
