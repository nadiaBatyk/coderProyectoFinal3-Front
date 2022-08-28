import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  user!: any;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.user$.subscribe((res) => {
      if (res) {
        this.user = res;
        console.log(this.user);
      }
    });
   
  }
}
