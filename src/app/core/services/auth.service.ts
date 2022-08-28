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
  private userSubject: BehaviorSubject<User|null>;
    public user$: Observable<User|null>

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<User|null>(this.getUser());
    this.user$ = this.userSubject.asObservable();
  }

  login(user: User): Observable<User> {
    return this.httpClient
      .post<User>(`${environment.apiUrlDev}/login`, user)
      .pipe(
        map((user) => {
          this.setUser(user);
          this.userSubject.next(user)
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
    this.userSubject.next(null)
    this.cookieService.delete('token');
    this.router.navigate(['/login']);
  }
  setUser(user: User) {
    this.cookieService.set('user', JSON.stringify(user, null, 2), {
      expires: 1,
    });
  }
  getUser(): User | null {
    const user = this.cookieService.get('user')
    if(user){
      return JSON.parse(user);
    }return null
    
  }
}
