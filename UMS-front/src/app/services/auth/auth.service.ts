import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {Observable, switchMap} from 'rxjs';
import { UserInterface } from '../../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = "http://127.0.0.1:8000";
  isAuthenticated$ = this.isAuthenticated();
  private activeUser$ = this.getUser();

  constructor(private http: HttpClient) {}

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(this.baseUrl + '/api/user/authenticated');
  }

  get authenticatedOf(): Observable<boolean> {
    return this.isAuthenticated$;
  }

  get activeUserOf(): Observable<UserInterface> {
    return this.activeUser$;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get(this.baseUrl + '/sanctum/csrf-cookie').pipe(
      switchMap(() =>
        this.http.post(this.baseUrl + '/login', {
          username,
          password,
          remember: true,
        })
      )
    );
  }

  register(
    name: string,
    surname: string,
    gender : string,
    username : string,
    email: string,
    password: string,
    password_confirmation: string) {
    return this.http.get(this.baseUrl + '/sanctum/csrf-cookie').pipe(
      switchMap(() =>
        this.http.post(this.baseUrl + '/register', {
          name,
          surname,
          gender,
          username,
          email,
          password,
          password_confirmation,
        })
      )
    );
  }

  logout() {
    return this.http.get(this.baseUrl + '/api/logout');
  }

  getUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.baseUrl + '/api/user');
  }

  getUserById(user_id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(this.baseUrl + '/api/user/' + user_id);
  }

  index(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.baseUrl + '/api/user');
  }
}
