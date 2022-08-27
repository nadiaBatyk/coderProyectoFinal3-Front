import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private cookieService:CookieService,private router:Router) { }

  login(user:User):Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrlDev}/login`,user)
  }
  register(user:User):Observable<User>{
    return this.httpClient.post<User>(`${environment.apiUrlDev}/register`,user)
  }
  logout(){
    this.cookieService.delete("token")
    this.router.navigate(['/login'])
  }
  setToken(token:string){
    this.cookieService.set("token",token)
  }
  getToken(){
    return this.cookieService.get("token")
  }
}
