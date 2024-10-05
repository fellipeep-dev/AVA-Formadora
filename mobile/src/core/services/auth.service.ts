import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterface } from '../shared/@types/auth';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { ApiServiceFactory } from '../common/factory/api.factory';
import { Router } from '@angular/router';
import { UserInterface } from '../shared/@types/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiServiceFactory<AuthInterface> {
  constructor(http: HttpClient, private router: Router) {
    super(http);
  }
  login(data: Pick<UserInterface, 'email' | 'password'>) {
    return this.http
      .post<UserInterface>(`${this.baseUrl}/user/auth`, data)
      .pipe(
        tap((response) => {
          localStorage.setItem('user', JSON.stringify(response.id!));
        }),
        catchError(this.handleError)
      );
  }
  create(data: UserInterface) {
    return this.http.post<UserInterface>(`${this.baseUrl}/user`, data).pipe(
      tap((response) => {
        localStorage.setItem('user', JSON.stringify(response.id!));
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = `Ocorreu um erro inesperado: ${error}`;
    if (error.status === 0) {
      errorMessage = 'Não foi possível conectar ao servidor.';
      console.log(errorMessage);
    } else if (error.status === 401) {
      errorMessage = 'Login ou senha inválidos.';
      console.log(errorMessage);
    } else if (error.status === 500) {
      errorMessage = 'Erro no servidor. Tente novamente mais tarde.';
      console.log(errorMessage);
    }
    return throwError(() => new Error(errorMessage));
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/begin']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('user');
  }
}
