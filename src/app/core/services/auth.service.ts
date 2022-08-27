import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  voidUser: User = {
    name: '',
    token: '',
    email: '',
  };
  private userSubject: BehaviorSubject<User> = new BehaviorSubject<User>(
    this.voidUser
  );
  public user$: Observable<User> = this.userSubject.asObservable();
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {}

  login(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${environment.apiUrlDev}/login`, user)
      .pipe(
        map((user) => {
          this.userSubject.next(user);
          return user;
        })
      );
  }
  register(user: User): Observable<User> {
    return this.httpClient.post<User>(
      `${environment.apiUrlDev}/register`,
      user
    );
  }
  logout() {
    this.cookieService.delete('token');
    this.userSubject.next(this.voidUser);
    this.router.navigate(['/login']);
  }
  setToken(token: string) {
    this.cookieService.set('user', token);
  }
  getToken() {
    return this.cookieService.get('token');
  }
}
